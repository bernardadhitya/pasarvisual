import React, { useState, useEffect, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, AsyncStorage } from "react-native";
import Center from "../Center/Center";
import { AuthContext } from "../../Helper/AuthProvider";
import PrivateRouter from "./PrivateRouter";
import AuthenticationRouter from "./AuthenticationRouter";

export const Routes = () => {
  const { user, loginAsCreative, loginAsBusiness } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  console.disableYellowBox = true;

  useEffect(() => {
    // check if the user is logged in or not
    AsyncStorage.getItem("user")
      .then(userString => {
        if (userString) {
          // decode it
          const userJson = JSON.parse(userString);
          const { role } = userJson;

          if(role === 'creative'){
            loginAsCreative();
          } else if (role === 'business'){
            loginAsBusiness();
          }
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      { user ? <PrivateRouter /> : <AuthenticationRouter/>}
    </NavigationContainer>
  );
};