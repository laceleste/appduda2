import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Task from "../screens/Task";
import NewTask from "../screens/NewTask";
import Details from "../screens/Details";
import Teste from "../screens/teste"

const Stack = createStackNavigator();

export default function App() {
  return (

      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen name="Task" component={Task} options={{ headerTintColor: "#F92E6A"}}/>
        <Stack.Screen name="New Task" component={NewTask} options={{ headerTintColor: "#F92E6A"}}/>
        <Stack.Screen name="Details" component={Details} options={{ headerTintColor: "#F92E6A"}}/>
      </Stack.Navigator>

  );
}