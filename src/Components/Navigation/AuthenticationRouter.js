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

const Stack = createStackNavigator();

const Login = () => {
  const navigation = useNavigation();
  const { loginAsCreative, loginAsBusiness } = useContext(AuthContext);
  let [fontsLoaded] = useFonts(Fonts);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const checkLogin = () => {
    if (email === 'naomi@gmail.com'){
      loginAsBusiness();
    } else {
      loginAsCreative();
    }
  }

  return fontsLoaded ? (
    <View style={styles.center}>
      <View style={{width: 300}}>
        <Input
          value={email}
          label='Email'
          placeholder='Place your email'
          onChangeText={nextValue => setEmail(nextValue)}
        />
        <Input
          value={password}
          label='Password'
          placeholder='Place your Text'
          secureTextEntry={true}
          onChangeText={nextValue => setPassword(nextValue)}
        />
      </View>
      <View style={{height: 30}}></View>
      <TouchableOpacity style={styles.loginButton} onPress={() => {checkLogin()}}>
        <Text
          style={{
            fontFamily: 'Bold',
            fontSize: 16,
            color: '#FFFFFF'
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {navigation.navigate('Register')}}
      >
        <Text style={{fontFamily: 'Medium', fontSize: 16, color: '#63C7FD'}}>
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
    backgroundColor: '#E5FCFB'
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
    marginVertical: 4,
    width: 277,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    backgroundColor: '#63C7FD',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 16,
    paddingBottom: 6,
    alignItems: 'center'
  }
});

export default AuthenticationRouter;