import React from "react";
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes.js';
import LoginScreen from './Screen/LoginScreen.js';
import RegisterScreen from './Screen/RegisterScreen.js';
import SplashScreen from './Screen/SplashScreen.js';

const Stack = createStackNavigator();

const Auth = () => {
  //Stack Navigator for Login and Sign up screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          //set_header_title
          title: "Login YourSelf",
          headerStyle: {
            backgroundColor: "#307ecc",
          },
          //header_text_color
          headerTintColor: "#fff",
          headerTintStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          //set_header_title
          title: "Register YourSelf",
          headerStyle: {
            backgroundColor: "#307ecc",
          },
          //header_text_color
          headerTintColor: "#fff",
          headerTintStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* splash screen */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          //hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: include login and signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        {/* Navigation Drawer as Loading Page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
