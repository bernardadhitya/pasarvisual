import React from "react";
import { Text } from "react-native";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import IconHome from '../../Assets/icons/IconHome';
import IconMessage from "../../Assets/icons/IconMessage";
import IconSearch from '../../Assets/icons/IconSearch';
import IconPerson from '../../Assets/icons/IconPerson';
import IconPlus from '../../Assets/icons/IconPlus';
import Center from "../Center/Center";
import { DarkColors } from "../../Constants/Colors";
import HomePage from "../../Containers/HomePage/HomePage";
import DiscoverPage from "../../Containers/DiscoverPage/DiscoverPage";
import PostPage from "../../Containers/PostPage/PostPage";
import { createStackNavigator } from "@react-navigation/stack";
import OthersProfilePage from "../../Containers/ProfilePage/OthersProfilePage";
import ProfilePage from "../../Containers/ProfilePage/ProfilePage";
import ViewServicesPage from "../../Containers/ServicesPage/ViewServicesPage";
import EditServicesPage from "../../Containers/ServicesPage/EditServicesPage";

const Tabs = AnimatedTabBarNavigator();
const Stack = createStackNavigator();

const HomeRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomePage}
      />
      <Stack.Screen
        name="OtherProfileScreen"
        component={OthersProfilePage}
      />
      <Stack.Screen
        name="ViewServicesScreen"
        component={ViewServicesPage}
      />
    </Stack.Navigator>
  )
}

const DiscoverRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="DiscoverScreen"
        component={DiscoverPage}
      />
      <Stack.Screen
        name="OtherProfileScreen"
        component={OthersProfilePage}
      />
    </Stack.Navigator>
  )
}

const ProfileRouter = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfilePage}
      />
      <Stack.Screen
        name="EditServicesScreen"
        component={EditServicesPage}
      />
    </Stack.Navigator>
  )
}

const PrivateRouter = () => {

  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "#323232"
      }}
      appearence={{
        activeTabBackgrounds: '#3DD598',
        activeColors: '#FFFFFF',
        shadow: true,
        whenActiveShow: 'icon-only',
        tabBarBackground: DarkColors['sub-primary'],
      }}
    >
      <Tabs.Screen
        name="HomeTab"
        component={HomeRouter}
        options={{ tabBarIcon: ({ focused, color }) => (
          <IconHome
            color={focused ? color : "#96A7AF"}
            focused={focused}
          />
        ) }}
      />
      <Tabs.Screen
        name="DiscoverTab"
        component={DiscoverRouter}
        options={{ tabBarIcon: ({ focused, color }) => (
          <IconSearch
            color={focused ? color : "#96A7AF"}
            focused={focused}
          />
        ) }}
      />
      <Tabs.Screen
        name="PostTab"
        component={PostPage}
        options={{ tabBarIcon: ({ focused, color }) => (
          <IconPlus
            color={focused ? color : "#96A7AF"}
            focused={focused}
          />
        ) }}
      />
      <Tabs.Screen
        name="ChatTab"
        component={BoilerplateComponent}
        options={{ tabBarIcon: ({ focused, color }) => (
          <IconMessage
            color={focused ? color : "#96A7AF"}
            focused={focused}
          />
        ) }}
      />
      <Tabs.Screen
        name="ProfileTab"
        component={ProfileRouter}
        
        options={{ tabBarIcon: ({ focused, color }) => (
          <IconPerson
            color={focused ? color : "#96A7AF"}
            focused={focused}
          />
        ) }}
      />
    </Tabs.Navigator>
  );
};

function BoilerplateComponent({ route }) {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
    </Center>
  );
}

export default PrivateRouter;