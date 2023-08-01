import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "../screens/Onboarding/Onboarding";
import Splash from "../screens/Splash/Splash";
import Login from "../screens/Authentication/Login/Login";
import SignUp from "../screens/Authentication/SignUp/SignUp";
import LoginScreen from "../screens/Authentication/Login/LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View } from "react-native";

const Stack = createStackNavigator();

const AuthStack = () => {
  const [user, setUser] = React.useState(null);
  const [carregando, setCarregado] = React.useState(true);
  
  const getObject = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("usuario");

      jsonValue !== null ? setCarregado(true) : setCarregado(false);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e.message);
    }
  };

  React.useEffect(() => {
     getObject();
  }, []);

  return(<Stack.Navigator>
         <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
         <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown:false}}/>
  </Stack.Navigator>)
     
  
};
export default AuthStack;
