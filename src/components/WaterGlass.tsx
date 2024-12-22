import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Rect, Line, Polygon } from "react-native-svg";

interface WaterGlassProps {
  currentLevel: number;
}

const WaterGlass: React.FC<WaterGlassProps> = ({ currentLevel }) => {
  const maxLevel = 10;
  const glassHeight = 160;
  const waterHeight = (currentLevel / maxLevel) * glassHeight;

  return (
    <View style={styles.container}>
      <Text style={styles.levelText}>{currentLevel} Ly</Text>
      <Svg width="70" height={glassHeight} viewBox="0 0 100 200">
        <Rect
          x="10"
          y="0"
          width="80"
          height={glassHeight}
          fill="#E0E0E0"
          rx="10"
        />
        <Rect
          x="10"
          y={glassHeight - waterHeight}
          width="80"
          height={waterHeight}
          fill="rgba(25, 118, 210, 0.8)"
          rx="10"
        />
      </Svg>

      <View style={styles.ruler}>
        {Array.from({ length: maxLevel }, (_, index) => {
          const isActive = currentLevel === maxLevel - index;
          return (
            <View key={index} style={styles.rulerItem}>
              <View
                style={[styles.rulerLine, isActive && styles.activeRulerLine]}
              />
              <Text
                style={[styles.rulerText, isActive && styles.activeRulerText]}
              >
                {maxLevel - index}
              </Text>
            </View>
          );
        })}
      </View>

      <View
        style={[styles.arrowContainer, { top: glassHeight - waterHeight - 10 }]}
      >
        <Svg height="20" width="14">
          <Polygon points="40,0 0,10 40,20" fill="black" />
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  levelText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  ruler: {
    position: "absolute",
    left: -50,
    height: "100%",
    justifyContent: "space-between",
  },
  rulerItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  rulerLine: {
    width: 16,
    height: 1,
    backgroundColor: "#BDBDBD",
  },
  activeRulerLine: {
    backgroundColor: "#0288D1",
  },
  rulerText: {
    fontSize: 12,
    color: "#757575",
    marginLeft: 5,
  },
  activeRulerText: {
    color: "#0288D1",
    fontWeight: "600",
  },
  arrowContainer: {
    position: "absolute",
    right: -40,
  },
});

export default WaterGlass;