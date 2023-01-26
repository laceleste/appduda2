import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./StackNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
render() {
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          inactiveTintColor: "white",
          itemStyle: { marginVertical: 5 }
        }}
        
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen name="MyHome" component={StackNavigator} options={{ unmountOnBlur: true }}/>
        <Drawer.Screen name="Profile" component={Profile} options={{ unmountOnBlur: true }}/>
      </Drawer.Navigator>
    );
  }
}