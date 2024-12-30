import React, { useRef, useEffect } from "react";
import { TouchableOpacity, View, StyleSheet, Text, Animated } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import HomeIcon from "../../assets/images/home.jsx";
import StatisticIcon from "../../assets/images/statistic.jsx";
import SettingIcon from "../../assets/images/setting.jsx";
import ProfileIcon from "../../assets/images/profile.jsx";
import ArticleIcon from "../../assets/images/article.jsx";
import AddIcon from "../../assets/images/add.jsx";

interface TabButtonProps {
  routeName: string;
  label: string;
  IconComponent: React.ComponentType<{ fill: string; width: number; height: number }>;
  target: keyof RootStackParamList;
  onPress?: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ routeName, label, IconComponent, target, onPress }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const isFocused = route.name === routeName;
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isFocused && routeName === "Home") {
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      scaleAnim.setValue(0);
    }
  }, [isFocused, routeName]);

  const handlePress = () => {
    if (routeName === "Home" && onPress) {
      navigation.navigate(target);
      onPress();
    } else {
      navigation.navigate(target);
    }
  };

  return (
      <TouchableOpacity
          onPress={handlePress}
          style={styles.tabButton}
      >
        {routeName === "Home" && isFocused ? (
            <Animated.View style={[styles.roundIcon, { transform: [{ scale: scaleAnim }] }]}>
              <AddIcon width={66} height={66} />
              <View style={styles.iconOverlay}>
              </View>
            </Animated.View>
        ) : (
            <>
              <IconComponent fill={isFocused ? "#0ea6e9" : "#bcbcbc"} width={isFocused ? 28 : 24} height={isFocused ? 28 : 24} />
              <Text style={[styles.tabText, isFocused && styles.selectedTabText]}>{label}</Text>
            </>
        )}
      </TouchableOpacity>
  );
};

export default function TabBar() {
  return (
      <View style={styles.tabBar}>
        <TabButton routeName="Article" label="Article" IconComponent={ArticleIcon} target="Article" />
        <TabButton routeName="Statistic" label="Statistic" IconComponent={StatisticIcon} target="Statistic" />
        <TabButton routeName="Home" label="Home" IconComponent={HomeIcon} target="Home" />
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
    paddingHorizontal: -10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 5,
    height: 70,
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  tabText: {
    color: "#bcbcbc",
    fontSize: 12,
    fontFamily: "Cera_Medium",
  },
  selectedTabText: {
    color: "#0ea6e9",
    fontSize: 13,
    fontFamily: "Cera_Bold",
  },
  roundIcon: {
    width: 66,
    height: 66,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -15,
  },
  iconOverlay: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
