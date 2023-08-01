import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CardList from "../screens/Account/Payment/ListCards/CardList";
import AddCard from "../screens/Account/Payment/AddCard/AddCard";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const CardStack = () => {
  // const Stack = createStackNavigator();
  const Stack = createMaterialTopTabNavigator();
  return (
    <Stack.Navigator initialRouteName="Cartões">
      <Stack.Screen
        name="Cartões"
        component={CardList}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "grey",
          tabBarIndicatorStyle: {
            backgroundColor: "orange",
          },
        }}
      />
      <Stack.Screen
        name="Novo Cartão"
        component={AddCard}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "grey",
          tabBarIndicatorStyle: {
            backgroundColor: "orange",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default CardStack;
