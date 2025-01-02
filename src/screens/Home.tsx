import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {
    Dimensions,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import {
    GestureHandlerRootView,
    State as GestureState,
    PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import { useTheme } from '../contexts/ThemeContext';
import Arrow from '../../assets/images/arrow';
import HistorySvg from '../../assets/images/history';
import TabBar from '../components/TabBar';
import WaterAnimation from '../components/WaterAnimation';
import { useWaterTracker } from '../contexts/WaterTrackerContext';

const windowWidth = Dimensions.get('window').width;

const Home = () => {
    const { colors } = useTheme(); // Using colors from the theme context
    const { currentLevel, maxLevel } = useWaterTracker();

    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const today = new Date();

    const translateX = useSharedValue(0);
    const isAnimating = useSharedValue(false);

    const isYesterday = (date: Date): boolean => {
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        return (
            date.getDate() === yesterday.getDate() &&
            date.getMonth() === yesterday.getMonth() &&
            date.getFullYear() === yesterday.getFullYear()
        );
    };

    const isToday = (date: Date): boolean => {
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    const handleSwipeAnimation = (direction: number, newDate: Date) => {
        if (isAnimating.value) return;
        isAnimating.value = true;
        runOnJS(setCurrentDate)(newDate);

        translateX.value = withTiming(
            direction * windowWidth,
            { duration: 100 },
            (finished) => {
                if (finished) {
                    translateX.value = -direction * windowWidth; // Reset here
                    translateX.value = withTiming(0, { duration: 100 }, () => {
                        isAnimating.value = false;
                    });
                } else {
                    isAnimating.value = false;
                }
            },
        );
    };

    const onSwipe = (event: any) => {
        const { state, translationX } = event.nativeEvent;
        const swipeThreshold = 50;
        if (isAnimating.value) return;
        if (state === GestureState.END) {
            if (translationX > swipeThreshold) {
                const prevDate = new Date(currentDate);
                prevDate.setDate(currentDate.getDate() - 1);
                handleSwipeAnimation(1, prevDate);
            } else if (
                translationX < -swipeThreshold &&
                !isToday(currentDate)
            ) {
                const nextDate = new Date(currentDate);
                nextDate.setDate(currentDate.getDate() + 1);
                handleSwipeAnimation(-1, nextDate);
            }
        }
    };

    const openDatePicker = () => {
        setShowDatePicker(true);
    };

    const handleDateChange = (_event: any, selectedDate?: Date) => {
        setShowDatePicker(false);
        if (selectedDate) {
            const today = new Date();
            if (selectedDate > today) {
                setCurrentDate(today);
            } else {
                setCurrentDate(selectedDate);
            }
        }
    };

    const renderDateLabel = (): string => {
        if (isToday(currentDate)) {
            return 'Today';
        } else if (isYesterday(currentDate)) {
            return 'Yesterday';
        } else {
            return currentDate.toLocaleDateString();
        }
    };

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
        ],
    }));

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <PanGestureHandler
                onGestureEvent={onSwipe}
                onHandlerStateChange={onSwipe}
            >
                <View style={[styles.container, { backgroundColor: colors.background }]}>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity
                            onPress={openDatePicker}
                            style={styles.calendar}
                        >
                            <Text style={[styles.date, { color: colors.text }]}>
                                {renderDateLabel()}
                            </Text>
                            <Arrow style={styles.arrow } fill={colors.text} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => console.log('History clicked!')}
                            style={styles.historyButton}
                        >
                            <HistorySvg fill={colors.text} />
                        </TouchableOpacity>
                    </View>
                    {showDatePicker && (
                        <DateTimePicker
                            value={currentDate}
                            mode="date"
                            display={
                                Platform.OS === 'ios' ? 'inline' : 'default'
                            }
                            onChange={handleDateChange}
                        />
                    )}
                    <Animated.View
                        style={[
                            styles.mainTableWrapper,
                            animatedStyle,
                            { backgroundColor: colors.sub_background, borderColor: colors.primary },
                        ]}
                    >
                        <WaterAnimation />
                        <View style={styles.centerContent}>
                            <Text style={[styles.percentage, { color: colors.primary }]}>
                                {Math.floor((currentLevel / maxLevel) * 100)}%
                            </Text>
                        </View>
                    </Animated.View>
                    <View style={styles.infoContainer}>
                        <View style={styles.column}>
                            <Text style={[styles.labelText, { color: colors.text }]}>Target</Text>
                            <Text style={[styles.labelText, { color: colors.text }]}>Drank</Text>
                            <Text style={[styles.labelText, { color: colors.text }]}>Remaining</Text>
                            <Text style={[styles.labelText, { color: colors.text }]}>Drinks count</Text>
                        </View>
                        <View style={styles.column}>
                            <Text style={[styles.valueText, { color: colors.primary }]}>0 ml</Text>
                            <Text style={[styles.valueText, { color: colors.primary }]}>0</Text>
                            <Text style={[styles.valueText, { color: colors.primary }]}>0</Text>
                            <Text style={[styles.valueText, { color: colors.primary }]}>0</Text>
                        </View>
                    </View>
                    <TabBar />
                </View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '5%',
        width: '100%',
        position: 'relative',
    },
    calendar: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    date: {
        fontFamily: 'Cera_Black',
        fontSize: 26,
        marginRight: 10,
    },
    arrow: {
        transform: [{ translateY: 2 }],
        height: 16,
        width: 16,
    },
    historyButton: {
        position: 'absolute',
        height: 33,
        width: 33,
        right: '5%',
    },
    mainTableWrapper: {
        width: windowWidth * 0.9,
        height: windowWidth * 0.9,
        marginTop: 30,
        borderRadius: windowWidth * 0.45,
        overflow: 'hidden',
    },
    centerContent: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: windowWidth * 0.45,
        height: windowWidth * 0.45,
        transform: [
            { translateX: -windowWidth * 0.225 },
            { translateY: -windowWidth * 0.225 },
        ],
        justifyContent: 'center',
        alignItems: 'center',
    },
    percentage: {
        fontFamily: 'Cera_Black',
        fontSize: 40,
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8%',
        width: '50%',
    },
    column: {
        justifyContent: 'space-around',
        padding: 10,
    },
    labelText: {
        fontFamily: 'Cera_Bold',
        fontSize: 16,
        marginBottom: 8,
    },
    valueText: {
        fontFamily: 'Cera_Black',
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'right',
    },
});

export default Home;
