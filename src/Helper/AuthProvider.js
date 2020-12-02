import React, { useState } from "react";
import { AsyncStorage } from "react-native";

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
          const fakeCreative = { 
            username: "Bernard",
            role: 'creative'
          };
          setUser(fakeCreative);
          AsyncStorage.setItem("user", JSON.stringify(fakeCreative));
        },
        loginAsBusiness: () => {
          const fakeBusiness = {
            username: "Naomi",
            role: 'business'
          };
          setUser(fakeBusiness);
          AsyncStorage.setItem("user", JSON.stringify(fakeBusiness));
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