import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

//Components
import CustomSidebarMenu from "./Components/CustomSidebarMenu.js";
import NavigationDrawerHeader from "./Components/NavigationDrawerHeader.js";
//DrawerScreens
import HomeScreen from "./drawerScreens/HomeScreen.js";
import SettingsScreen from "./drawerScreens/SettingsScreen.js";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "Home",
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#307ecc",
          },
          headerTintColor: "#fff",
          headerTintStyle: { fontWeight: "bold" },
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#307ecc",
        },
        headerTintColor: "#fff",
        headerTintStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigationRoutes = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: "#cee1f2",
        color: "#cee1f2",
        itemStyle: { marginVertical: 5, color: "white" },
        labelStyle: { color: "#d8d8d8" },
      }}
      screenOptions={{ headerShown: false }}
      drawerContent={CustomSidebarMenu}
    >
      <Drawer.Screen
        name="HomeScreenStack"
        component={HomeScreenStack}
        options={{
          drawerLabel: "Home Screen",
        }}
      />
      <Drawer.Screen
        name="SettingsScreenStack"
        component={SettingsScreenStack}
        options={{
          drawerLabel: "Setting Screen",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationRoutes;
