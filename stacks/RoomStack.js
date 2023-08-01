import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddReview from "../screens/Home/Room/AddReview/AddReview";
import PaymentStack from "./PaymentStack";
import RoomDetails from "../screens/Home/Room/Room/RoomDetails";


const RoomStack = () => {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator initialRouteName="RoomDetails" >
      <Stack.Screen  name="RoomDetails" component={RoomDetails}/>
      <Stack.Screen  name="Confirm" component={PaymentStack}/>
      <Stack.Screen  name="AddReview" component={AddReview}/>

      </Stack.Navigator>
  );
};

export default RoomStack;
