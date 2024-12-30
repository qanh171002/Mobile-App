import React, { useEffect } from "react";
import AppNavigator from "./navigation/AppNavigator";
import { UserProvider } from "./contexts/UserContext";
import { useFonts } from 'expo-font';
import { WaterTrackerProvider } from "./contexts/WaterTrackerContext";

const App = () => {
    const [error] = useFonts({
        Cera_Black: require("../assets/fonts/Cera-Black.otf"),
        Cera_Bold: require("../assets/fonts/Cera-Bold.otf"),
        Cera_Light: require("../assets/fonts/Cera-Light.otf"),
        Cera_Medium: require("../assets/fonts/Cera-Medium.otf"),
        Cera_Regular: require("../assets/fonts/Cera-Regular.otf"),
        Cera_Thin: require("../assets/fonts/Cera-Thin.otf"),
    });

    useEffect(() => {
        if (error) {
            console.log("Error loading fonts", error);
        }
    }, [error]);

    return (
        <WaterTrackerProvider>
            <UserProvider>
                <AppNavigator />
            </UserProvider>
        </WaterTrackerProvider>
    );
};

export default App;
