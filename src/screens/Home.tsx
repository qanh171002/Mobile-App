import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { Ionicons } from "@expo/vector-icons";
import TabBar from "../components/TabBar";
import { useUser } from "../contexts/UserContext";
import { useWaterTracker } from "../contexts/WaterTrackerContext";
import WaterDroplet from "../../assets/images/water_droplet";
import WaterAnimation from "../components/WaterAnimation"; // Import the WaterAnimation component

const getGreeting = () => {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good morning";
  } else if (currentHour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

const Home = () => {
  const { user } = useUser();
  const { currentLevel, maxLevel } = useWaterTracker();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [timeValue, setTimeValue] = useState(() => {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return currentDate.toLocaleString("vi-VN", options);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      setTimeValue(currentDate.toLocaleString("en-US", options));
    }, 10000); // Update every minute

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const handleAddGoal = () => {
    navigation.navigate("SetGoal");
  };

  return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <Text style={styles.greet}>{getGreeting()},</Text>
            <Text style={styles.username}>
              {user.fname} {user.lname}
            </Text>
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
          <WaterAnimation />
          <View style={styles.mainTable}>
            <View style={styles.leftSide}>
              <Text style={styles.time}>{timeValue}</Text>
              <Text style={styles.waterAmount}>
                {currentLevel * 200} ml ({currentLevel} cups)
              </Text>
              <TouchableOpacity style={styles.addBtn} onPress={handleAddGoal}>
                <Text style={styles.addBtnText}>Add Goals</Text>
              </TouchableOpacity>
            </View>
            <WaterDroplet style={styles.droplet} />
          </View>
        </View>

        <View style={styles.circularContainer}>
          <View style={styles.circularProgress}>
            <Text style={styles.circularText}> {currentLevel * 200} ml</Text>
          </View>
          <View style={styles.progressDetails}>
            <View style={styles.progressRow}>
              <Ionicons name="water-outline" size={20} color="#1976D2" />
              <Text style={styles.progressText}>{currentLevel * 200} ml</Text>
              <Text style={styles.progressPercentage}>
                {maxLevel > 0
                    ? `${Math.floor((currentLevel / maxLevel) * 100)}%`
                    : "0%"}
              </Text>
            </View>
            <Text style={styles.goalText}>Target: {maxLevel * 200} ml</Text>
          </View>
        </View>

        <TouchableOpacity
            style={styles.dashboardBtn}
            onPress={() => navigation.navigate("Result")}
        >
          <Text style={styles.dashboardBtnText}>Result</Text>
        </TouchableOpacity>
        <Text style={styles.finishText}>
          You have completed {Math.floor((currentLevel / maxLevel) * 100)}% of your goal today, keep it up!
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
    paddingHorizontal: "5%",
    paddingTop: 36,
  },
  header: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  greet: {
    fontSize: 18,
    fontWeight: "500",
    color: "#90A5B4",
  },
  username: {
    fontSize: 27,
    fontFamily: "VPoppins_Bold",
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
    width: "90%",
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
    flexDirection: "row",
    gap: 36,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: "4%",
  },
  leftSide: {
    flexDirection: "column",
  },
  time: {
    fontSize: 20,
    fontFamily: "Poppins_Bold",
    lineHeight: 32,
  },
  waterAmount: {
    color: "#90A5B4",
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: 16,
  },
  addBtn: {
    marginTop: 30,
    backgroundColor: "#fff",
    width: 95,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 25,
  },
  addBtnText: {
    color: "#121212",
    fontFamily: "Poppins_SemiBold",
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
    marginLeft: "4%",
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
    top: "-60%",
    left: -20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    shadowColor: "#1BA9E1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
    left: -20,
    fontSize: 14,
    fontWeight: "600",
    color: "#1976D2",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: "#1BA9E1",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    textAlign: "center",
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
  droplet: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    transform: [{ translateY: "10%" }, { translateX: "53%" }],
  },
});

export default Home;
