import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenOne from "./src/screens/screen1";
import ScreenTwo from "./src/screens/screen2";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ScreenOne} />
        <Stack.Screen name="Card" component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
