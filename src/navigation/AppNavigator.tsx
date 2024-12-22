import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import LandingPage1 from "../screens/LandingPage1";
import LandingPage2 from "../screens/LandingPage2";
import LandingPage3 from "../screens/LandingPage3";
import Home from "../screens/Home";
import Statistics from "../screens/Statistics";
import Setting from "../screens/Setting";
import Profile from "../screens/Profile";
import SetGoal from "../screens/SetGoal";
import WaterTracker from "../screens/WaterTracker";

export type RootStackParamList = {
  LandingPage1: undefined;
  LandingPage2: undefined;
  LandingPage3: undefined;
  Home: undefined;
  Login: undefined;
  Statistics: undefined;
  Setting: undefined;
  Profile: undefined;
  SetGoal: undefined;
  WaterTracker: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LandingPage1"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
        }}
      >
        <Stack.Screen name="LandingPage1" component={LandingPage1} />
        <Stack.Screen name="LandingPage2" component={LandingPage2} />
        <Stack.Screen name="LandingPage3" component={LandingPage3} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Statistics" component={Statistics} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SetGoal" component={SetGoal} />
        <Stack.Screen name="WaterTracker" component={WaterTracker} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
