import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import TabBar from '../components/TabBar';
import { useTheme } from '../contexts/ThemeContext';

type RootStackParamList = {
    Article: undefined;
    WebViewScreen: { link: string };
};

type NavigationProp = StackNavigationProp<RootStackParamList, 'Article'>;

const screenHeight = Dimensions.get('window').height;
const tabBarHeight = 60;

export default function Statistic() {

    const { colors } = useTheme();

    const sections = [
        { id: 'days', title: 'Days', onPress: () => console.log('Days clicked!') },
        { id: 'weeks', title: 'Weeks', onPress: () => console.log('Weeks clicked!') },
        { id: 'months', title: 'Months', onPress: () => console.log('Months clicked!') },
        { id: 'all', title: 'All', onPress: () => console.log('All clicked!') },
    ];

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
                    Statistic
                </Text>
                <View
                    style={[
                        styles.horizontalBar,
                        { backgroundColor: colors.sub_background },
                    ]}
                >
                    {sections.map((section, index) => (
                        <TouchableOpacity
                            key={section.id}
                            style={[
                                styles.barItem,
                                index === sections.length - 1 && styles.lastBarItem,
                                { borderRightColor: colors.background },
                            ]}
                            onPress={section.onPress}
                        >
                            <Text
                                style={[
                                    styles.barItemText,
                                    { color: colors.text },
                                ]}
                            >
                                {section.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <TabBar />
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
    horizontalBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#f0f0f0',
        marginVertical: 20,
        alignSelf: 'center',
    },
    barItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        height: '100%',
        borderRightWidth: 2,
    },
    lastBarItem: {
        borderRightWidth: 0,
    },
    barItemText: {
        fontSize: 16,
        fontFamily: 'Cera_Bold',
    },
});
