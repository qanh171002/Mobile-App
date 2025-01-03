import { NavigationContainer } from '@react-navigation/native';
import {
    CardStyleInterpolators,
    createStackNavigator,
} from '@react-navigation/stack';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Article from '../screens/Article';
import Home from '../screens/Home';
import LandingPage1 from '../screens/LandingPage1';
import LandingPage2 from '../screens/LandingPage2';
import LandingPage3 from '../screens/LandingPage3';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import Result from '../screens/Result';
import Schedule from '../screens/Schedule';
import SetGoal from '../screens/SetGoal';
import Setting from '../screens/Setting';
import Statistic from '../screens/Statistic';
import WaterTracker from '../screens/WaterTracker';
import WebViewScreen from '../screens/WebViewScreen';

// Import your WebView screen

// Add `WebViewScreen` to the navigation parameter list
export type RootStackParamList = {
    LandingPage1: undefined;
    LandingPage2: undefined;
    LandingPage3: undefined;
    Login: undefined;
    Article: undefined;
    Statistic: undefined;
    Home: undefined;
    Setting: undefined;
    Profile: undefined;
    Schedule: undefined;
    SetGoal: undefined;
    WaterTracker: undefined;
    Result: undefined;
    WebViewScreen: { link: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="LandingPage1"
                    screenOptions={{
                        headerShown: false,
                        cardStyleInterpolator:
                            CardStyleInterpolators.forNoAnimation,
                    }}
                >
                    <Stack.Screen
                        name="LandingPage1"
                        component={LandingPage1}
                    />
                    <Stack.Screen
                        name="LandingPage2"
                        component={LandingPage2}
                    />
                    <Stack.Screen
                        name="LandingPage3"
                        component={LandingPage3}
                    />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Schedule" component={Schedule} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Article" component={Article} />
                    <Stack.Screen name="Statistic" component={Statistic} />
                    <Stack.Screen name="Setting" component={Setting} />
                    <Stack.Screen name="SetGoal" component={SetGoal} />
                    <Stack.Screen
                        name="WaterTracker"
                        component={WaterTracker}
                    />
                    <Stack.Screen name="Result" component={Result} />
                    <Stack.Screen
                        name="WebViewScreen"
                        component={WebViewScreen} // Add WebViewScreen to the stack
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default AppNavigator;
