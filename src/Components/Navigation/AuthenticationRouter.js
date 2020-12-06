import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../../Helper/AuthProvider";
import Center from "../Center/Center";
import { Button, Text, View, StyleSheet } from "react-native";
import { useFonts } from '@use-expo/font';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Input } from "@ui-kitten/components";
import { DarkColors } from "../../Constants/Colors";
import PageOne from "../../Containers/RegisterPage/PageOne";
import PageTwo from "../../Containers/RegisterPage/PageTwo";
import PageThree from "../../Containers/RegisterPage/PageThree";
import { fakeBusinessUser, fakeCreativeUser } from "../../Constants/Users";

const Stack = createStackNavigator();

const Login = () => {
  const navigation = useNavigation();
  const { loginAsCreative, loginAsBusiness } = useContext(AuthContext);
  let [fontsLoaded] = useFonts(Fonts);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const checkLogin = () => {
    if (email === fakeBusinessUser.email){
      loginAsBusiness();
    } else if (email === fakeCreativeUser.email) {
      loginAsCreative();
    }
  }

  return fontsLoaded ? (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: DarkColors.background
    }}>
      <View style={{width: 300}}>
        <Input
          style={{
            backgroundColor: DarkColors["sub-tertiary"],
            borderColor: DarkColors["sub-tertiary"]
          }}
          value={email}
          label='Email'
          placeholder='Place your email'
          onChangeText={nextValue => setEmail(nextValue)}
        />
        <Input
          style={{
            backgroundColor: DarkColors["sub-tertiary"],
            borderColor: DarkColors["sub-tertiary"]
          }}
          value={password}
          label='Password'
          placeholder='Place your Text'
          secureTextEntry={true}
          onChangeText={nextValue => setPassword(nextValue)}
        />
      </View>
      <View style={{height: 30}}></View>
      <TouchableOpacity
        style={{
          backgroundColor: DarkColors.primary,
          marginVertical: 4,
          width: 277,
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingBottom: 10,
          alignItems: 'center'
        }}
        onPress={() => {checkLogin()}}
      >
        <Text
          style={{
            fontFamily: 'Bold',
            fontSize: 16,
            color: DarkColors["text-primary"]
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: DarkColors["secondary"],
          marginVertical: 4,
          width: 277,
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingTop: 10,
          paddingBottom: 10,
          alignItems: 'center'
        }}
        onPress={() => {navigation.navigate('PageOne')}}
      >
        <Text style={{
          fontFamily: 'Medium', fontSize: 16, color: DarkColors['primary']
        }}>
          Don't have account, sign me up!
        </Text>
      </TouchableOpacity>
    </View>
  ) : <AppLoading/>;
}

function Register({ navigation, route }) {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate("Login");
          // navigation.goBack()
        }}
      />
    </Center>
  );
}

const AuthenticationRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}
      initialRouteName="Login"
    >
      <Stack.Screen
        options={{
          headerTitle: "Login"
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTitle: "Register"
        }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{
          headerTitle: "PageOne"
        }}
        name="PageOne"
        component={PageOne}
      />
      <Stack.Screen
        options={{
          headerTitle: "PageTwo"
        }}
        name="PageTwo"
        component={PageTwo}
      />
      <Stack.Screen
        options={{
          headerTitle: "PageThree"
        }}
        name="PageThree"
        component={PageThree}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    flexDirection: 'column',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    marginVertical: 10
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginVertical: 4,
    width: 277,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 6,
    alignItems: 'center'
  },
  loginButton: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    marginVertical: 4,
    width: 277,
    backgroundColor: '#63C7FD',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 6,
    alignItems: 'center'
  }
});

export default AuthenticationRouter;