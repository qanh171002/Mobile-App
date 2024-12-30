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
import Profile from "../screens/Profile";
import Article from "../screens/Article";
import Statistic from "../screens/Statistic";
import Setting from "../screens/Setting";
import SetGoal from "../screens/SetGoal";
import WaterTracker from "../screens/WaterTracker";
import Result from "../screens/Result";
import Login from "../screens/Login";

export type RootStackParamList = {
  LandingPage1: undefined;
  LandingPage2: undefined;
  LandingPage3: undefined;
  Home: undefined;
  Login: undefined;
  Statistic: undefined;
  Setting: undefined;
  Article: undefined;
  Profile: undefined;
  SetGoal: undefined;
  WaterTracker: undefined;
  Result: undefined;
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
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Article" component={Article} />
        <Stack.Screen name="Statistic" component={Statistic} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="SetGoal" component={SetGoal} />
        <Stack.Screen name="WaterTracker" component={WaterTracker} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
