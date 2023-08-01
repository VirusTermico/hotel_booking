import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Profile from '../screens/Account/Profile/Profile'
import Account from '../screens/Account/Account'
import CardStack from "./CardStack";


const AccountStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen  name="Account" component={Account}  />
      <Stack.Screen  name="Perfil" component={Profile}/>
      <Stack.Screen  name="Cartões" component={CardStack} />

    </Stack.Navigator>
  );
};

export default AccountStack;
