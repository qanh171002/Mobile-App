// src/components/TabBar.tsx
import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Modal,
  Dimensions,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useWaterTracker } from "../contexts/WaterTrackerContext";

type TabBarProps = {};
const { height } = Dimensions.get("window");

export default function TabBar({}: TabBarProps) {
  const { increaseLevel, selectedValue } = useWaterTracker();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const route = useRoute();

  const getIconColor = (tabName: string) => {
    return route.name === tabName ? "#1976D2" : "black";
  };

  const [visible, setVisible] = useState(false);
  const translateY = React.useRef(new Animated.Value(height)).current;

  const openModal = () => {
    setVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(translateY, {
      toValue: height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setVisible(false));
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
        // onPress={() => {
        //   increaseLevel();
        // }}
        onPress={openModal}
      >
        <FontAwesome name="plus" size={24} color="white" />
      </TouchableOpacity>
      <Modal visible={visible} transparent animationType="none">
        <View style={styles.overlay}>
          <TouchableOpacity style={styles.background} onPress={closeModal} />
          <Animated.View
            style={[styles.modalContent, { transform: [{ translateY }] }]}
          >
            <Text style={styles.title}>Thêm lượng nước</Text>
            <View style={styles.waterOptions}>
              {selectedValue === "Số ly nước"
                ? [1, 2, 3, 4].map((amount) => (
                    <TouchableOpacity
                      key={amount}
                      style={styles.optionButton}
                      onPress={() => {
                        increaseLevel(amount);
                        closeModal();
                      }}
                    >
                      <Text style={styles.optionText}>{amount} ly</Text>
                    </TouchableOpacity>
                  ))
                : [200, 400, 600, 800].map((amount) => (
                    <TouchableOpacity
                      key={amount}
                      style={styles.optionButton}
                      onPress={() => {
                        increaseLevel(amount / 200);
                        closeModal();
                      }}
                    >
                      <Text style={styles.optionText}>{amount} ml</Text>
                    </TouchableOpacity>
                  ))}
            </View>
          </Animated.View>
        </View>
      </Modal>
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
    backgroundColor: "rgba(25, 118, 210, 1)",
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
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  background: {
    ...StyleSheet.absoluteFillObject,
  },

  modalContent: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: "60%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: "center",
    color: "#1976D2",
  },
  waterOptions: {
    flexDirection: "row", // Sắp xếp các mục theo hàng ngang.
    flexWrap: "wrap", // Cho phép các mục tự xuống dòng nếu không đủ không gian.
    justifyContent: "space-between", // Căn đều khoảng cách giữa các cột.
    marginTop: 10,
  },

  optionButton: {
    backgroundColor: "#E3F2FD",
    paddingVertical: 15,
    borderRadius: 12,
    marginBottom: 10, // Khoảng cách giữa các hàng.
    width: "48%", // Đảm bảo mỗi nút chiếm gần 50% chiều rộng container.
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  optionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1976D2",
  },
});
