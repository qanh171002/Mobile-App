import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import HomeIcon from "../../assets/images/home.jsx";
import StatisticsIcon from "../../assets/images/statistics.jsx";
import SettingIcon from "../../assets/images/setting.jsx";
import ProfileIcon from "../../assets/images/profile.jsx";

interface TabButtonProps {
  routeName: string;
  label: string;
  IconComponent: React.ComponentType<{ fill: string; width: number; height: number }>;
  target: keyof RootStackParamList;
}

const TabButton: React.FC<TabButtonProps> = ({ routeName, label, IconComponent, target }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();

  return (
      <TouchableOpacity
          onPress={() => navigation.navigate(target)}
          style={styles.tabButton}
      >
        <IconComponent fill={route.name === routeName ? "#1976D2" : "#121212"}
                       width={route.name === routeName ? 28 : 24}
                       height={route.name === routeName ? 28 : 24} />
        <Text style={[styles.tabText, route.name === routeName && styles.selectedTabText]}>{label}</Text>
      </TouchableOpacity>
  );
};

export default function TabBar() {
  return (
      <View style={styles.tabBar}>
        <TabButton routeName="Home" label="Home" IconComponent={HomeIcon} target="Home" />
        <TabButton routeName="Statistics" label="Statistics" IconComponent={StatisticsIcon} target="Statistics" />
        <TabButton routeName="Setting" label="Setting" IconComponent={SettingIcon} target="Setting" />
        <TabButton routeName="Profile" label="Profile" IconComponent={ProfileIcon} target="Profile" />
      </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabText: {
    color: "#121212",
    fontSize: 12,
    fontFamily: "Poppins_Medium",
  },
  selectedTabText: {
    color: "#1976D2",
    fontSize: 14,
    fontFamily: "Poppins_SemiBold",
  },
  addButton: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 15,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    top: -20,
  },
});
