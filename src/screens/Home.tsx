import React, { useState } from "react";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  Animated,
  Platform,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import TabBar from "../components/TabBar";
import { useWaterTracker } from "../contexts/WaterTrackerContext";
import WaterAnimation from "../components/WaterAnimation";
import Arrow from "../../assets/images/arrow.jsx";
import DateTimePicker from "@react-native-community/datetimepicker";
import { PanGestureHandler, GestureHandlerRootView } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;

const Home = () => {
  const { currentLevel, maxLevel } = useWaterTracker();
  const navigation =
      useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false); // Trạng thái để hiện Date Picker
  const today = new Date();
  const translateX = useState(new Animated.Value(0))[0];
  const [isAnimating, setIsAnimating] = useState(false); // Trạng thái để khóa animation

  const isToday = (date: Date) => {
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
  };

  const onSwipeGesture = (event: any) => {
    if (isAnimating) return; // Nếu đang xử lý animation, khóa vuốt

    const swipeThreshold = 50; // Ngưỡng vuốt

    if (event.nativeEvent.translationX < -swipeThreshold && !isToday(currentDate)) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + 1);
      handleSwipeAnimation(-1, nextDate);
    } else if (event.nativeEvent.translationX > swipeThreshold) {
      const prevDate = new Date(currentDate);
      prevDate.setDate(currentDate.getDate() - 1);
      handleSwipeAnimation(1, prevDate);
    }
  };

  // Thực hiện animation
  const handleSwipeAnimation = (direction: number, newDate: Date) => {
    setIsAnimating(true); // Khóa animation
    Animated.timing(translateX, {
      toValue: direction * windowWidth, // Xác định điểm dịch chuyển
      duration: 300, // Thời lượng animation
      useNativeDriver: true,
    }).start(() => {
      setCurrentDate(newDate); // Cập nhật ngày khi vuốt xong
      translateX.setValue(-direction * windowWidth); // Reset vị trí sau dịch chuyển
      Animated.timing(translateX, {
        toValue: 0, // Trả về trạng thái ban đầu
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setIsAnimating(false); // Mở khóa animation sau khi hoàn thành hoàn toàn
      });
    });
  };

  // Hàm mở DatePicker
  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  // Xử lý khi chọn ngày trong DatePicker
  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false); // Đóng DatePicker khi người dùng chọn xong
    if (selectedDate) {
      setCurrentDate(selectedDate); // Cập nhật ngày được chọn
    }
  };

  // Hiển thị ngày
  const renderDateLabel = () => {
    return isToday(currentDate)
        ? "Today"
        : currentDate.toLocaleDateString(); // Hiển thị ngày/tháng/năm khi không phải hôm nay
  };

  return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <PanGestureHandler onGestureEvent={onSwipeGesture}>
          <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress={openDatePicker} style={styles.calendar}>
                <Text style={styles.date}>{renderDateLabel()}</Text>
                <Arrow style={styles.arrow} width={16} height={16} />
              </TouchableOpacity>
            </View>

            {/* Date Picker */}
            {showDatePicker && (
                <DateTimePicker
                    value={currentDate}
                    mode="date"
                    display={Platform.OS === "ios" ? "inline" : "default"}
                    onChange={handleDateChange}
                />
            )}

            {/* Animated View */}
            <Animated.View
                style={[
                  styles.mainTableWrapper,
                  { transform: [{ translateX }] },
                ]}
            >
              <WaterAnimation />
              <View style={styles.centerContent}>
                <Text style={styles.percentage}>
                  {Math.floor((currentLevel / maxLevel) * 100)}%
                </Text>
              </View>
            </Animated.View>

            <View style={styles.infoContainer}>
              {/* Cột bên trái: Labels */}
              <View style={styles.column}>
                <Text style={styles.labelText}>Target</Text>
                <Text style={styles.labelText}>Drank</Text>
                <Text style={styles.labelText}>Remaining</Text>
                <Text style={styles.labelText}>Drinks count</Text>
              </View>
              {/* Cột bên phải: Values */}
              <View style={styles.column}>
                <Text style={styles.valueText}>0 ml</Text>
                <Text style={styles.valueText}>0</Text>
                <Text style={styles.valueText}>0</Text>
                <Text style={styles.valueText}>0</Text>
              </View>
            </View>

            {/* Tab Navigation */}
            <TabBar />
          </View>
        </PanGestureHandler>
      </GestureHandlerRootView>
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
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 36,
  },
  calendar: {
    flexDirection: "row",
  },
  arrow: {
    transform: [{ translateY: 12 }],
  },
  date: {
    fontFamily: "Cera_Black",
    fontSize: 26,
    color: "#121212",
    marginRight: 10,
    marginBottom: 10,
  },
  mainTableWrapper: {
    width: windowWidth * 0.9,
    height: windowWidth * 0.9,
    marginTop: 24,
    backgroundColor: "#fff",
    overflow: "hidden",
    borderRadius: windowWidth * 0.45,
    borderWidth: 10,
    borderColor: "#bedcf8",
  },
  centerContent: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: windowWidth * 0.45,
    height: windowWidth * 0.45,
    transform: [
      { translateX: -windowWidth * 0.225 },
      { translateY: -windowWidth * 0.225 },
    ],
    justifyContent: "center",
    alignItems: "center",
  },
  percentage: {
    fontFamily: "Cera_Black",
    fontSize: 40,
    color: "#bedcf8",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
    width: "50%",
  },
  column: {
    justifyContent: "space-around",
    padding: 10,
  },
  labelText: {
    fontFamily: "Cera_Bold",
    fontSize: 16,
    color: "#121212", // Màu xám cho nhãn
    marginBottom: 8,
  },
  valueText: {
    fontFamily: "Cera_Black",
    fontSize: 16,
    color: "#0ea6e9", // Màu đen cho giá trị
    marginBottom: 8,
    textAlign: "right",
  },
});

export default Home;
