import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";

const currentDate = new Date();
const dateValue = `${currentDate.getDate()} tháng ${
  currentDate.getMonth() + 1
} `;

const Result: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBack = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.date}>Hôm nay - {dateValue}</Text>
      <Text style={styles.greeting}>Chào, Anh T</Text>

      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/2383/2383637.png",
        }}
        style={styles.icon}
      />

      <View style={styles.card}>
        <View style={styles.overlayContainer1}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/7626/7626666.png",
            }}
            style={styles.fireworkIcon}
          />
        </View>
        <Text style={styles.congratsText}>Xin chúc mừng!</Text>
        <Text style={styles.mainMessage}>
          Bạn đã hoàn thành mục tiêu của ngày hôm nay!
        </Text>
        <Text style={styles.subMessage}>
          Hãy luôn luôn cố gắng như ngày hôm nay! Bạn đang chăm sóc tốt cho bản
          thân để đạt được những điều tuyệt vời trong cuộc sống.
        </Text>
        <View style={styles.overlayContainer2}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1021/1021202.png",
            }}
            style={styles.trophyIcon}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleBack}>
        <Text style={styles.buttonText}>Về trang chủ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  date: {
    marginTop: 20,
    fontSize: 21,
    fontWeight: "600",
    marginBottom: 10,
  },
  greeting: {
    fontSize: 16,
    marginVertical: 20,
    color: "#90A5B4",
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#rgba(25, 118, 210, 0.8)",
    paddingTop: 30,
    paddingBottom: 70,
    paddingHorizontal: 20,
    borderRadius: 10,
    textAlign: "left",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  congratsText: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 16,
    color: "#fff",
  },
  mainMessage: {
    fontSize: 16,
    textAlign: "left",
    marginBottom: 10,
    color: "#fff",
    lineHeight: 18,
    fontWeight: "600",
  },
  subMessage: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 20,
    color: "#fff",
    lineHeight: 18,
  },

  button: {
    backgroundColor: "rgba(25, 118, 210, 0.8)",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 8,
    marginTop: 80,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  overlayContainer1: {
    position: "absolute",
    top: -20,
    right: -10,
    zIndex: 2,
  },
  overlayContainer2: {
    position: "absolute",
    top: 200,
    right: "70%",
    zIndex: 2,
  },
  fireworkIcon: {
    width: 80,
    height: 80,
    transform: [{ scaleX: -1 }],
  },
  trophyIcon: {
    width: 100,
    height: 100,
  },
});

export default Result;