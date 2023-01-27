import React from "react";
import { View, Text, Alert, StyleSheet, SafeAreaView } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView>
      <View style={stylesSidebar.sideMenuContainer}>
        <View style={stylesSidebar.profileHeader}>
          <View style={stylesSidebar.profileHeaderPicCircle}>
            <Text style={{ fontSize: 25, color: "#307ecc" }}>
              {"A".charAt(0)}
            </Text>
          </View>
          <Text style={stylesSidebar.profileHeaderText}>AdiHajare1696</Text>
        </View>
        
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <DrawerItem
            label={({ color }) => (
              <Text style={{ color: "#000" }}>LOGOUT</Text>
            )}
            onPress={() => {
              props.navigation.toggleDrawer();
              Alert.alert(
                "Logout",
                "Are you sure? You want to logout?",
                [
                  {
                    text: "cancel",
                    onPress: () => {
                      return null;
                    },
                  },
                  {
                    text: "Confirm",
                    onPress: () => {
                      AsyncStorage.clear();
                      props.navigation.replace("Auth");
                    },
                  },
                ],
                { cancelable: false }
              );
            }}
          />
        </DrawerContentScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: "100%",
    height: "100%",
    paddingtop: 40,
    color: "white",
  },
  profileHeader: {
    flexDirection: "row",
    backgroundColor: "#307ecc",
    paddingStart: 15,
    paddingTop:45,
    paddingBottom:10,
    textAlign: "center",
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: "white",
    backgroundColor: "#ffffff",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  profileHeaderText: {
    color: "white",
    alignSelf: "center",
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: "#e2e2e2",
    marginTop: 15,
  },
});
