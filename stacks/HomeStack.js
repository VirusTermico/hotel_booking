import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home/HomeScreen";
import Confirm from '../screens/Account/Payment/Confirm/Confirm'
import Method from '../screens/Account/Payment/PaymentMethod/Method'
import Sucess from '../screens/Account/Payment/Sucess/Sucess'
import RoomDetails from "../screens/Home/Room/Room/RoomDetails";
import AddReview from "../screens/Home/Room/AddReview/AddReview";
import CardStack from "./CardStack";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Detalhes"
        component={RoomDetails}
      />
      <Stack.Screen name="AddReview" component={AddReview} />
      <Stack.Screen  name="Confirmar Dados" component={Confirm}/>
      <Stack.Screen  name="Método de Pagamento" component={Method}/>
      <Stack.Screen  name="Sucess" component={Sucess}/>
      <Stack.Screen  name="Cards" component={CardStack}/>
    </Stack.Navigator>
  );
};

export default HomeStack;
