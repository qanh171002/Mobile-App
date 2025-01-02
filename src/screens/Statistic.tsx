// src/pages/HomePage.tsx
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import TabBar from '../components/TabBar';
import { RootStackParamList } from '../navigation/AppNavigator';

export default function Statistic() {
    const navigation =
        useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.leftTitle}>Hôm nay</Text>
                    <Text style={styles.rightTitle}>Mục tiêu</Text>
                </View>
                <View style={styles.section1}>
                    <View style={styles.leftSection1}>
                        <Text style={styles.sectionTitle}>Nước</Text>
                    </View>
                    <View style={styles.rightSection1}>
                        <Text style={styles.sectionTitle}>Đi bộ</Text>
                        <View style={styles.progressContainer}>
                            {/* <CircularProgress
                size={100}
                strokeWidth={8}
                progress={62}
                backgroundColor="rgba(109, 177, 244, 0.2)"
                progressColor="#1976D2"
              /> */}
                        </View>
                    </View>
                </View>
                <View style={styles.section2}>
                    <View style={styles.leftSection2}>
                        <View style={styles.columnItem}></View>
                        <View style={styles.columnItem}></View>
                    </View>
                    <View style={styles.rightSection2}>
                        <Text style={styles.sectionTitle}>Nhịp tim</Text>
                    </View>
                </View>
            </View>
            <TabBar />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingTop: 40,
        paddingBottom: 100,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 28,
        height: 80,
    },
    leftTitle: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 32,
    },
    rightTitle: {
        fontSize: 24,
        fontWeight: 700,
        lineHeight: 32,
    },
    section1: {
        flex: 3.6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 18,
    },
    leftSection1: {
        flex: 1,
        height: '100%',
        borderWidth: 0.5,
        borderColor: '#D0D0D0',
        borderRadius: 18,
        marginLeft: 28,
    },
    rightSection1: {
        flex: 1,
        height: '100%',
        borderWidth: 0.5,
        borderColor: '#D0D0D0',
        borderRadius: 18,
        marginRight: 28,
    },
    progressContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    section2: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 18,
        marginTop: 18,
    },
    leftSection2: {
        flex: 1,
        height: '100%',
        borderWidth: 0.5,
        borderColor: '#D0D0D0',
        borderRadius: 18,
        marginLeft: 28,
    },
    rightSection2: {
        flex: 1,
        height: '100%',
        borderWidth: 0.5,
        borderColor: '#D0D0D0',
        borderRadius: 18,
        marginRight: 28,
    },
    columnItem: {
        flex: 1,
        marginBottom: 10,
        borderRadius: 8,
    },
    sectionTitle: {
        padding: 20,
        fontSize: 20,
        fontWeight: 500,
    },
});
