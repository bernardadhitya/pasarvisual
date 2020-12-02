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

const Tabs = AnimatedTabBarNavigator();

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
        tabBarBackground: DarkColors['secondary'],
      }}
    >
      <Tabs.Screen
        name="Home"
        component={BoilerplateComponent}
        options={{ tabBarIcon: ({ focused, color }) => (
          <IconHome
            color={focused ? color : "#96A7AF"}
            focused={focused}
          />
        ) }}
      />
      <Tabs.Screen
        name="Discover"
        component={BoilerplateComponent}
        options={{ tabBarIcon: ({ focused, color }) => (
          <IconSearch
            color={focused ? color : "#96A7AF"}
            focused={focused}
          />
        ) }}
      />
      <Tabs.Screen
        name="Post"
        component={BoilerplateComponent}
        options={{ tabBarIcon: ({ focused, color }) => (
          <IconPlus
            color={focused ? color : "#96A7AF"}
            focused={focused}
          />
        ) }}
      />
      <Tabs.Screen
        name="Chat"
        component={BoilerplateComponent}
        options={{ tabBarIcon: ({ focused, color }) => (
          <IconMessage
            color={focused ? color : "#96A7AF"}
            focused={focused}
          />
        ) }}
      />
      <Tabs.Screen
        name="Profile"
        component={BoilerplateComponent}
        
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