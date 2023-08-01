import React, { useState } from "react";
import AuthStack from "./stacks/AuthStack";
import MainStack from "./stacks/MainStack";
import { auth } from "./services/firebase";
import * as Font from "expo-font";
import Onboarding from "./screens/Onboarding/Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "./screens/Splash/Splash";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const customFonts = {
  "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
};
export default function App() {
  const [viewOnboarding, setviewOnboarding] = useState(false);

  const [assetsLoaded, setLoaded] = React.useState(false);
  const _loadeAssets = async () => {
    await Font.loadAsync(customFonts);
    setLoaded(true);
  };

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setviewOnboarding(true);
      }
    } catch (error) {
    } finally {
    }
  };

  React.useEffect(() => {
    _loadeAssets();
    checkOnboarding();
  });
const Stack=createStackNavigator()
  return (
    <>
      {assetsLoaded ? (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={viewOnboarding ? "Auth" : "Welcome"}
          >
            <Stack.Screen
              name="Auth"
              component={AuthStack}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Main"
              component={MainStack}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Welcome"
              component={Onboarding}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <Splash />
      )}
    </>
  );
}
