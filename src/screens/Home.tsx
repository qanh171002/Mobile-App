import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { Ionicons } from "@expo/vector-icons";
import TabBar from "../components/TabBar";

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.greet}>Chào buổi sáng,</Text>
          <Text style={styles.username}>Trần Anh T</Text>
        </View>
        <TouchableOpacity style={styles.notifyBtn}>
          <Ionicons name="notifications-sharp" size={24} color="#1976D2" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>
      <View style={styles.mainTable}>
        <Text style={styles.time}>11:00 AM</Text>
        <Text style={styles.waterAmount}>200ml nước (2 ly)</Text>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.addBtnText}>Thêm mục tiêu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subTable}></View>
      <TouchableOpacity
        style={styles.dashboardBtn}
        onPress={() => navigation.navigate("Statistics")}
      >
        <Text style={styles.dashboardBtnText}>Đi đến thống kê</Text>
      </TouchableOpacity>
      <Text style={styles.finishText}>
        Bạn đã hoàn thành 50% mục tiêu hôm nay, tiếp tục cố gắng!
      </Text>
      <TabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F4F8FB",
    paddingTop: 40,
    flexDirection: "column",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 36,
    paddingTop: 36,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  greet: {
    fontSize: 16,
    fontWeight: 500,
    color: "#90A5B4",
    marginBottom: 8,
  },
  username: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 32,
  },
  notifyBtn: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 70,
    shadowColor: "rgba(27, 169, 225, 0.08)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 45,
    elevation: 5,
  },
  notificationDot: {
    position: "absolute",
    top: 0,
    right: 5,
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 6,
  },
  mainTable: {
    flexDirection: "column",
    width: "80%",
    height: 160,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginTop: 24,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  time: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 32,
  },
  waterAmount: {
    color: "#90A5B4",
  },
  addBtn: {
    marginTop: 50,
    backgroundColor: "#1976D2",
    width: 120,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 25,
  },
  addBtnText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    width: 100,
  },
  subTable: {
    width: "80%",
    height: 180,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginTop: 28,
  },
  dashboardBtn: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: "#1976D2",
    borderRadius: 8,
    marginTop: 40,
  },
  dashboardBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
  },
  finishText: {
    width: 220,
    textAlign: "center",
    paddingHorizontal: 2,
    color: "#90A5B4",
    marginTop: 20,
  },
});

export default Home;
