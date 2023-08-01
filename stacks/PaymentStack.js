import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CardStack from "./CardStack";
import Confirm from '../screens/Account/Payment/Confirm/Confirm'
import Method from '../screens/Account/Payment/PaymentMethod/Method'
import Sucess from '../screens/Account/Payment/Sucess/Sucess'

const PaymentStack = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName="Confirm">
      <Stack.Screen  name="Confirm" component={Confirm}/>
      <Stack.Screen  name="PaymentMethod" component={Method}/>
      <Stack.Screen  name="Sucess" component={Sucess}/>
      <Stack.Screen  name="Cards" component={CardStack}/>

      </Stack.Navigator>
  );
};

export default PaymentStack;
