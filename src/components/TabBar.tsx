// src/components/TabBar.tsx
import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useWaterTracker } from "../contexts/WaterTrackerContext";

type TabBarProps = {};

export default function TabBar({}: TabBarProps) {
  const { increaseLevel } = useWaterTracker();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const route = useRoute();

  const getIconColor = (tabName: string) => {
    return route.name === tabName ? "#1976D2" : "black";
  };

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.tabButton}
      >
        <Ionicons name="home" size={24} color={getIconColor("Home")} />
        <Text style={{ color: getIconColor("Home") }}>Trang chủ</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Statistics")}
        style={styles.tabButton}
      >
        <MaterialCommunityIcons
          name="google-analytics"
          size={24}
          color={getIconColor("Statistics")}
        />
        <Text style={{ color: getIconColor("Statistics") }}>Thống kê</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          increaseLevel();
        }}
      >
        <FontAwesome name="plus" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Setting")}
        style={styles.tabButton}
      >
        <Ionicons name="settings" size={24} color={getIconColor("Setting")} />
        <Text style={{ color: getIconColor("Setting") }}>Cài đặt</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.tabButton}
      >
        <Ionicons name="person" size={24} color={getIconColor("Profile")} />
        <Text style={{ color: getIconColor("Profile") }}>Hồ sơ</Text>
      </TouchableOpacity>
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
