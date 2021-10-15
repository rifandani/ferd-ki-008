import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabBarIcon from "../components/common/TabBarIcon";
import NativeTabBarIcon from "../components/common/NativeTabBarIcon";

const { Navigator, Screen } = createBottomTabNavigator();

const HomeBottomTab = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarIcon: ({ color }) => (
            <NativeTabBarIcon name="home" color={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          // tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarIcon: ({ color }) => (
            <NativeTabBarIcon name="user" color={color} />
          ),
        }}
      />
    </Navigator>
  );
};

export default HomeBottomTab;
