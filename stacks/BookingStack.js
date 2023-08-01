import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import History from "../screens/Booking/History/History";
import Booking from "../screens/Booking/MyBookings/Booking";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const BookingStack = () => {
  const Stack = createMaterialTopTabNavigator();
  return (
    <Stack.Navigator initialRouteName="Reservas">
      <Stack.Screen
        name="Reservas"
        component={Booking}
        options={{
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "grey",
          tabBarIndicatorStyle: {
            backgroundColor: "orange",
          },
        }}
      />
      <Stack.Screen
        name="Histórico"
        component={History}
        options={{
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

export default BookingStack;
