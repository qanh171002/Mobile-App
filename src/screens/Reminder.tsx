import React, { useState } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    Alert,
    Modal,
    Button,
} from 'react-native';
import Slider from '@react-native-community/slider';
import TabBar from '../components/TabBar';
import { useTheme } from '../contexts/ThemeContext';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const tabBarHeight = 60;

const daysOfWeek = ['U', 'M', 'T', 'W', 'R', 'F', 'S'];

export default function Reminder() {
    const { colors } = useTheme();
    const [reminders, setReminders] = useState<{ date: Date; days: string[] }[]>([]);
    const [showPicker, setShowPicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedDays, setSelectedDays] = useState<string[]>([]);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const navigation = useNavigation();

    const addReminder = (date: Date, days: string[]) => {
        setReminders([...reminders, { date, days }]);
        Alert.alert('Reminder Set', `Reminder set for ${date.toLocaleTimeString()} on ${days.join(', ')}`);
    };

    const handleConfirm = (date: Date) => {
        setSelectedDate(date);
        addReminder(date, selectedDays);
        setDatePickerVisibility(false);
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const toggleDaySelection = (day: string) => {
        setSelectedDays((prevDays) =>
            prevDays.includes(day)
                ? prevDays.filter((d) => d !== day)
                : [...prevDays, day]
        );
    };

    const navigateToScheduler = () => {
        navigation.navigate('Scheduler');
    };

    return (
        <>
            <View
                style={[
                    styles.container,
                    {
                        backgroundColor: colors.background,
                        height: screenHeight - tabBarHeight,
                    },
                ]}
            >
                <Text
                    style={[styles.header, { color: colors.text }]}
                >
                    Reminder
                </Text>
                <View style={styles.daysContainer}>
                    {daysOfWeek.map((day) => (
                        <TouchableOpacity
                            key={day}
                            style={[
                                styles.dayButton,
                                selectedDays.includes(day) && styles.selectedDayButton,
                            ]}
                            onPress={() => toggleDaySelection(day)}
                        >
                            <Text
                                style={[
                                    styles.dayButtonText,
                                    selectedDays.includes(day) && styles.selectedDayButtonText,
                                ]}
                            >
                                {day}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
                <FlatList
                    data={reminders}
                    renderItem={({ item }) => (
                        <View style={styles.reminderItem}>
                            <Text style={[styles.reminderText, { color: colors.text }]}>
                                {item.date.toLocaleTimeString()} on {item.days.join(', ')}
                            </Text>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    contentContainerStyle={{
                        paddingBottom: tabBarHeight,
                    }}
                />
            </View>
            <TabBar />
            <TouchableOpacity
                style={styles.fab}
                onPress={navigateToScheduler}
            >
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    header: {
        fontSize: 30,
        fontFamily: 'Cera_Black',
        textAlign: 'left',
        marginLeft: 28,
        marginTop: 10,
    },
    daysContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    dayButton: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 25,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    selectedDayButton: {
        backgroundColor: '#007AFF',
    },
    dayButtonText: {
        fontSize: 15,
        fontFamily: 'Cera_Bold',
    },
    selectedDayButtonText: {
        color: '#fff',
    },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 90, // Adjusted to be above the TabBar
        backgroundColor: '#007AFF',
        borderRadius: 30,
        elevation: 8,
    },
    fabText: {
        fontSize: 30,
        color: 'white',
    },
    sliderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 20,
    },
    sliderWrapper: {
        alignItems: 'center',
    },
    sliderLabel: {
        fontSize: 18,
        fontFamily: 'Cera_Bold',
        marginBottom: 10,
    },
    slider: {
        width: 40,
        height: 300,
    },
    sliderValue: {
        fontSize: 18,
        fontFamily: 'Cera_Bold',
        marginTop: 10,
    },
    confirmButton: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Cera_Bold',
    },
    reminderItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    reminderText: {
        fontSize: 18,
        fontFamily: 'Cera_Bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
});
