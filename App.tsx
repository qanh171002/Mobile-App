import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { UserProvider } from './src/contexts/UserContext';
import { WaterTrackerProvider } from './src/contexts/WaterTrackerContext';
import AppNavigator from './src/navigation/AppNavigator';
import { ThemeProvider, useTheme } from "./src/contexts/ThemeContext";

const MainApp = () => {
    const { colors } = useTheme();

    return (
        <WaterTrackerProvider>
            <UserProvider>
                <StatusBar
                    backgroundColor = {colors.background}
                    barStyle = {colors.status}
                />
                <AppNavigator />
            </UserProvider>
        </WaterTrackerProvider>
    );
};

const App = () => {
    const [error] = useFonts({
        Cera_Black: require('./assets/fonts/Cera-Black.otf'),
        Cera_Bold: require('./assets/fonts/Cera-Bold.otf'),
        Cera_Light: require('./assets/fonts/Cera-Light.otf'),
        Cera_Medium: require('./assets/fonts/Cera-Medium.otf'),
        Cera_Regular: require('./assets/fonts/Cera-Regular.otf'),
        Cera_Thin: require('./assets/fonts/Cera-Thin.otf'),
    });

    useEffect(() => {
        if (error) {
            console.log('Error loading fonts', error);
        }
    }, [error]);

    return (
        <ThemeProvider>
            <MainApp />
        </ThemeProvider>
    );
};

export default App;
