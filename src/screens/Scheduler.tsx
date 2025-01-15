import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';

export default function Scheduler() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const navigation = useNavigation();

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setSelectedDate(date);
        hideDatePicker();
        Alert.alert('Alarm Set', `Alarm set for ${date.toLocaleTimeString()}`, [
            {
                text: 'OK',
                // onPress: () => navigation.navigate('Reminder'),
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Set an Alarm</Text>
            <TouchableOpacity style={styles.button} onPress={showDatePicker}>
                <Text style={styles.buttonText}>Pick a Time</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="time"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
            <Text style={styles.selectedTime}>
                Selected Time: {selectedDate.toLocaleTimeString()}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    selectedTime: {
        marginTop: 20,
        fontSize: 18,
    },
});
