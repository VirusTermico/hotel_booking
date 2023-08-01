import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountStack from "./AccountStack";
import BookingStack from "./BookingStack";
import HomeStack from "./HomeStack";
import Sobre from "../screens/Sobre/Sobre";
import { AntDesign, Foundation } from "@expo/vector-icons";

const Bottom = createBottomTabNavigator();

const MainStack = () => (



    <Bottom.Navigator initialRouteName="Home">
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: "Inicio",
          tabBarLabelStyle: {
            color: "black",
            fontFamily: "Montserrat-Regular",
            fontSize: 12,
          },
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="home"
              color={focused ? "orange" : "grey"}
              size={20}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Conta"
        component={AccountStack}
        options={{
          headerShown: false,
          tabBarLabel: "Conta",
          tabBarLabelStyle: {
            color: "black",
            fontFamily: "Montserrat-Regular",
            fontSize: 12,
          },
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="user"
              color={focused ? "orange" : "grey"}
              size={20}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Reservas"
        component={BookingStack}
        options={{
          tabBarLabel: "Reservas",
          tabBarLabelStyle: {
            color: "black",
            fontFamily: "Montserrat-Regular",
            fontSize: 12,
          },
          tabBarIcon: ({ focused, color, size }) => (
            <Foundation
              name="ticket"
              color={focused ? "orange" : "grey"}
              size={20}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Sobre"
        component={Sobre}
        options={{
          headerShown: false,
          tabBarLabel: "Sobre",
          tabBarLabelStyle: {
            color: "black",
            fontFamily: "Montserrat-Regular",
            fontSize: 12,
          },
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign
              name="info"
              color={focused ? "orange" : "grey"}
              size={20}
            />
          ),
        }}
      />
    </Bottom.Navigator>
);
export default MainStack;
