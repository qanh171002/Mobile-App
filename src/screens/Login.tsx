import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useNavigation } from "@react-navigation/native";

type LoginNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "LandingPage3"
>;

export default function LoginPage() {
  const navigation = useNavigation<LoginNavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Chào bạn !</Text>
        <Text style={styles.subtitle}>Hãy đăng nhập để sử dụng ứng dụng</Text>
      </View>

      <Image
        source={require("../assets/login-image.png")}
        style={styles.image}
      />

      <View style={styles.dividerContainer}>
        <View style={styles.divider}></View>
        <Text style={styles.dividerText}>Tiếp tục với</Text>
        <View style={styles.divider}></View>
      </View>

      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => navigation.navigate("Home")}
      >
        <AntDesign name="google" size={28} color="#1976D2" />
        <Text style={styles.googleButtonText}>Đăng nhập bằng Google</Text>
      </TouchableOpacity>
      <View style={styles.termsContainer}>
        <Text style={styles.termsText}>
          Khi đăng nhập, bạn đồng ý với{" "}
          <Text style={styles.link}>Điều khoản dịch vụ</Text> và{" "}
          <Text style={styles.link}>Chính sách bảo mật</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    textAlign: "left",
    fontWeight: 700,
    color: "#333",
  },
  subtitle: {
    fontSize: 18,
    color: "#8E8E8E",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    flex: 1,
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#777",
  },
  googleButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 15,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DEDEDE",
  },
  googleButtonText: {
    color: "#1976D2",
    fontWeight: 600,
    fontSize: 16,
    marginLeft: 12,
  },
  termsContainer: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  termsText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
  link: {
    color: "#1976D2",
    fontWeight: 600,
  },
});
