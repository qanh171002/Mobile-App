import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { Ionicons } from "@expo/vector-icons";
import TabBar from "../components/TabBar";
import Svg, { Path } from "react-native-svg";

const currentDate = new Date();
const options: Intl.DateTimeFormatOptions = {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};
const timeValue = currentDate.toLocaleString("vi-VN", options);

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleAddGoal = () => {
    navigation.navigate("SetGoal");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.greet}>Chào buổi sáng,</Text>
          <Text style={styles.username}>Trần Anh T</Text>
        </View>
        <TouchableOpacity
          style={styles.notifyBtn}
          onPress={() => navigation.navigate("WaterTracker")}
        >
          <Ionicons name="notifications-sharp" size={24} color="#1976D2" />
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainTableWrapper}>
        <Svg
          height="80%"
          width="100%"
          viewBox="0 0 1440 320"
          style={styles.wave}
        >
          <Path
            fill="#6DB1F4"
            fillOpacity="0.41"
            d="M0,20L48,29.3C96,19,192,-3,288,2.7C384,8,480,40,576,40C672,40,768,8,864,13.3C960,19,1056,61,1152,66.7C1248,72,1344,40,1392,24L1440,8L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <Path
            fill="#6DB1F4"
            fillOpacity="0.41"
            d="M0,-32L48,-21.3C96,-11,192,11,288,16C384,21,480,11,576,-10.7C672,-32,768,-64,864,-58.7C960,-53,1056,-11,1152,5.3C1248,21,1344,11,1392,5.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </Svg>

        <View style={styles.mainTable}>
          <Text style={styles.time}>{timeValue}</Text>
          <Text style={styles.waterAmount}>200ml nước (2 ly)</Text>
          <TouchableOpacity style={styles.addBtn} onPress={handleAddGoal}>
            <Text style={styles.addBtnText}>Thêm mục tiêu</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.circularContainer}>
        <View style={styles.circularProgress}>
          <Text style={styles.circularText}>500ml</Text>
        </View>
        <View style={styles.progressDetails}>
          <View style={styles.progressRow}>
            <Ionicons name="water-outline" size={20} color="#1976D2" />
            <Text style={styles.progressText}>100ml</Text>
            <Text style={styles.progressPercentage}>10%</Text>
          </View>
          {/* <Text style={styles.goalText}>Mục tiêu: 2000ml</Text> */}
        </View>
      </View>

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
    fontWeight: "500",
    color: "#90A5B4",
    marginBottom: 8,
  },
  username: {
    fontSize: 24,
    fontWeight: "700",
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
  mainTableWrapper: {
    position: "relative",
    height: 160,
    width: "80%",
    alignSelf: "center",
    marginTop: 24,
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
  },
  wave: {
    position: "absolute",
    bottom: "-20%",
  },
  mainTable: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  time: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 32,
  },
  waterAmount: {
    color: "#90A5B4",
  },
  addBtn: {
    marginTop: 30,
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
  circularContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
    position: "relative",
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  circularProgress: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 10,
    borderColor: "#1976D2",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  circularText: {
    fontSize: 18,
    fontWeight: "700",
  },
  progressDetails: {
    marginTop: 16,
    alignItems: "center",
  },
  progressRow: {
    position: "absolute",
    top: "-30%",
    left: "70%",
    transform: [{ translateX: -20 }, { translateY: -50 }],
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#1BA9E1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 45,
    elevation: 5,
  },
  progressText: {
    fontSize: 16,
    marginLeft: 8,
    marginRight: 8,
    fontWeight: "600",
  },
  progressPercentage: {
    fontSize: 16,
    color: "#1976D2",
  },
  goalText: {
    position: "absolute",
    top: "30%",
    left: "70%",
    transform: [{ translateX: -20 }, { translateY: -50 }],
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#90A5B4",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#1BA9E1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 45,
    elevation: 5,
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
    fontWeight: "600",
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
