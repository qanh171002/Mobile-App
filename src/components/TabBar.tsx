import React, { useEffect, useRef } from "react";
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import AddIcon from "../../assets/images/add";
import ArticleIcon from "../../assets/images/article";
import HomeIcon from "../../assets/images/home";
import ProfileIcon from "../../assets/images/profile";
import SettingIcon from "../../assets/images/setting";
import StatisticIcon from "../../assets/images/statistic";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useTheme } from "../contexts/ThemeContext";

// TabButtonProps: defining the props each tab will use
interface TabButtonProps {
    routeName: string;
    label: string;
    IconComponent: React.ComponentType<{
        fill: string;
        width: number;
        height: number;
    }>;
    target: keyof RootStackParamList;
    onPress?: () => void;
}

// TabButton: Single tab button implementation
const TabButton: React.FC<TabButtonProps> = ({
                                                 routeName,
                                                 label,
                                                 IconComponent,
                                                 target,
                                                 onPress,
                                             }) => {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute();
    const { colors } = useTheme(); // Get the colors from ThemeContext
    const isFocused = route.name === routeName;
    const scaleAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if (isFocused && routeName === "Home") {
            Animated.spring(scaleAnim, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        } else {
            scaleAnim.setValue(0);
        }
    }, [isFocused, routeName]);

    const handlePress = () => {
        if (routeName === "Home" && onPress) {
            navigation.navigate(target);
            onPress();
        } else {
            navigation.navigate(target);
        }
    };

    return (
        <TouchableOpacity onPress={handlePress} style={styles.tabButton}>
            {routeName === "Home" && isFocused ? (
                <Animated.View
                    style={[
                        styles.roundIcon,
                        { backgroundColor: colors.primary }, // Dynamic bg color
                        { transform: [{ scale: scaleAnim }] },
                    ]}
                >
                    <AddIcon width={66} height={66} />
                    <View
                        style={[
                            styles.iconOverlay,
                        ]}
                    ></View>
                </Animated.View>
            ) : (
                <>
                    <IconComponent
                        fill={isFocused ? colors.primary : colors.nav_text }
                        width={isFocused ? 28 : 24}
                        height={isFocused ? 28 : 24}
                    />
                    <Text
                        style={[
                            styles.tabText,
                            { color: isFocused ? colors.primary : colors.nav_text }, // Dynamic text color
                            isFocused && styles.selectedTabText,
                        ]}
                    >
                        {label}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    );
};

// Main TabBar component
export default function TabBar() {
    const { colors } = useTheme(); // Get colors from the theme context

    return (
        <View style={[styles.tabBar, { backgroundColor: colors.nav_background }]}>
            <TabButton
                routeName="Article"
                label="Article"
                IconComponent={ArticleIcon}
                target="Article"
            />
            <TabButton
                routeName="Statistic"
                label="Statistic"
                IconComponent={StatisticIcon}
                target="Statistic"
            />
            <TabButton
                routeName="Home"
                label="Home"
                IconComponent={HomeIcon}
                target="Home"
            />
            <TabButton
                routeName="Setting"
                label="Setting"
                IconComponent={SettingIcon}
                target="Setting"
            />
            <TabButton
                routeName="Profile"
                label="Profile"
                IconComponent={ProfileIcon}
                target="Profile"
            />
        </View>
    );
}

// Updated styles to allow dynamic colors
const styles = StyleSheet.create({
    tabBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingHorizontal: -10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.06,
        shadowRadius: 5,
        elevation: 5,
        height: 70,
    },
    tabButton: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: 60,
    },
    tabText: {
        fontSize: 12,
        fontFamily: "Cera_Medium",
    },
    selectedTabText: {
        fontSize: 13,
        fontFamily: "Cera_Bold",
    },
    roundIcon: {
        width: 66,
        height: 66,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: -15,
        borderRadius: 33,
    },
    iconOverlay: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 33,
        width: "100%",
        height: "100%",
    },
});
