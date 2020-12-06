import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import { fakeBusinessUser, fakeCreativeUser } from "../Constants/Users";

export const AuthContext = React.createContext({
  user: null,
  loginAsCreative: () => {},
  loginAsBusiness: () => {},
  logout: () => {}
});

export const AuthProvider= ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        loginAsCreative: () => {
          setUser(fakeCreativeUser);
          AsyncStorage.setItem("user", JSON.stringify(fakeCreativeUser));
        },
        loginAsBusiness: () => {
          setUser(fakeBusinessUser);
          AsyncStorage.setItem("user", JSON.stringify(fakeBusinessUser));
        },
        register: (userData) => {
          const { userName, role } = userData;
          const newUser = {
            username: userName,
            role: role
          };
          setUser(newUser);
          AsyncStorage.setItem("user", JSON.stringify(newUser));
        },
        logout: () => {
          //logs out user
          setUser(null);
          AsyncStorage.removeItem("user");
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};