import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import AddIcon from '../../assets/images/add';
import ArticleIcon from '../../assets/images/article';
import HomeIcon from '../../assets/images/home';
import ScheduleIcon from '../../assets/images/schedule';
import SettingIcon from '../../assets/images/setting';
import StatisticIcon from '../../assets/images/statistic';
import { useTheme } from '../contexts/ThemeContext';
import { RootStackParamList } from '../navigation/AppNavigator';

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

const windowWidth = Dimensions.get('window').width;

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
    const { colors } = useTheme();
    const isFocused = route.name === routeName;

    const scaleAnim = useRef(new Animated.Value(0)).current;
    const rotateAnim = useRef(new Animated.Value(0)).current; // Added for rotation
    const isRotated = useRef(false); // State to track rotation toggle

    useEffect(() => {
        if (isFocused && routeName === 'Home') {
            Animated.spring(scaleAnim, {
                toValue: 1,
                useNativeDriver: true,
            }).start();
        } else {
            scaleAnim.setValue(0);
        }
    }, [isFocused, routeName]);

    const handlePress = () => {
        if (routeName === 'Home') {
            if (onPress) {
                onPress();
            }
            toggleRotation(); // Trigger rotation when Add button is pressed
        }
        navigation.navigate(target);
    };

    const toggleRotation = () => {
        const rotateTo = isRotated.current ? 0 : 1; // Toggle between 0 and 1
        Animated.timing(rotateAnim, {
            toValue: rotateTo,
            duration: 500,
            useNativeDriver: true,
        }).start(() => {
            isRotated.current = !isRotated.current; // Update toggle state
        });
    };

    // Map rotation value to degrees
    const rotateInterpolate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '45deg'], // 0 -> 45 degrees
    });

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={styles.tabButton}
            activeOpacity={1}
        >
            {routeName === 'Home' && isFocused ? (
                <Animated.View
                    style={[
                        styles.roundIcon,
                        { backgroundColor: colors.primary }, // Dynamic bg color
                        {
                            transform: [
                                { scale: scaleAnim },
                                { rotate: rotateInterpolate }, // Apply rotation
                            ],
                        },
                    ]}
                >
                    <AddIcon fill="#fff" width={22} height={22} />
                </Animated.View>
            ) : (
                <>
                    <IconComponent
                        fill={isFocused ? colors.primary : colors.nav_text}
                        width={isFocused ? 28 : 24}
                        height={isFocused ? 28 : 24}
                    />
                    <Text
                        style={[
                            styles.tabText,
                            {
                                color: isFocused
                                    ? colors.primary
                                    : colors.nav_text,
                            },
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
        <View
            style={[styles.tabBar, { backgroundColor: colors.nav_background }]}
        >
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
                routeName="Schedule"
                label="Schedule"
                IconComponent={ScheduleIcon}
                target="Schedule"
            />
            <TabButton
                routeName="Setting"
                label="Setting"
                IconComponent={SettingIcon}
                target="Setting"
            />
        </View>
    );
}

// Updated styles to allow dynamic colors
const styles = StyleSheet.create({
    tabBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingHorizontal: -10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -5 },
        shadowOpacity: 0.06,
        shadowRadius: 5,
        elevation: 5,
        height: 75,
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
        height: 60,
    },
    tabText: {
        fontSize: 12,
        fontFamily: 'Cera_Medium',
    },
    selectedTabText: {
        fontSize: 13,
        fontFamily: 'Cera_Bold',
    },
    roundIcon: {
        width: windowWidth * 0.22,
        height: windowWidth * 0.22,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: -windowWidth * 0.075,
        borderRadius: windowWidth * 0.11,
    },
});
