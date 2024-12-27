import React, { useEffect } from "react";
import { Text } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { UserProvider } from "./contexts/UserContext";
import { useFonts } from 'expo-font';
import setDefaultProps from "react-native-simple-default-props";
import { WaterTrackerProvider } from "./contexts/WaterTrackerContext";

const defaultText = {
    style: {
        fontFamily: "Poppins_Regular",
    },
};

setDefaultProps(Text, defaultText);

const App = () => {
    const [error] = useFonts({
        Poppins_Black: require("../assets/fonts/Poppins-Black.ttf"),
        Poppins_BlackItalic: require("../assets/fonts/Poppins-BlackItalic.ttf"),
        Poppins_Bold: require("../assets/fonts/Poppins-Bold.ttf"),
        Poppins_BoldItalic: require("../assets/fonts/Poppins-BoldItalic.ttf"),
        Poppins_ExtraBold: require("../assets/fonts/Poppins-ExtraBold.ttf"),
        Poppins_ExtraBoldItalic: require("../assets/fonts/Poppins-ExtraBoldItalic.ttf"),
        Poppins_ExtraLight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
        Poppins_ExtraLightItalic: require("../assets/fonts/Poppins-ExtraLightItalic.ttf"),
        Poppins_Italic: require("../assets/fonts/Poppins-Italic.ttf"),
        Poppins_Light: require("../assets/fonts/Poppins-Light.ttf"),
        Poppins_LightItalic: require("../assets/fonts/Poppins-LightItalic.ttf"),
        Poppins_Medium: require("../assets/fonts/Poppins-Medium.ttf"),
        Poppins_MediumItalic: require("../assets/fonts/Poppins-MediumItalic.ttf"),
        Poppins_Regular: require("../assets/fonts/Poppins-Regular.ttf"),
        Poppins_SemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
        Poppins_SemiBoldItalic: require("../assets/fonts/Poppins-SemiBoldItalic.ttf"),
        Poppins_Thin: require("../assets/fonts/Poppins-Thin.ttf"),
        Poppins_ThinItalic: require("../assets/fonts/Poppins-ThinItalic.ttf"),
        VPoppins_Bold: require("../assets/fonts/VPoppins-Bold.ttf"),
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
