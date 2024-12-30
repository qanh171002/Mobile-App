import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Dropdown } from "react-native-element-dropdown";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useWaterTracker } from "../contexts/WaterTrackerContext";
import { useTheme } from "../contexts/ThemeContext";
interface Template {
  id: string;
  name: string;
  value: number;
  icon: string;
  displayValue?: string;
}

const SetGoal = () => {
  const [displayedTemplates, setDisplayedTemplates] = React.useState<
    Template[]
  >([]);
  const { maxLevel, chooseLevel, selectedValue, setSelectedValue } =
    useWaterTracker();
  const { colors } = useTheme();

  React.useEffect(() => {
    const updatedTemplates = templates.map((template) => {
      const newValue =
        selectedValue === "Số ml"
          ? template.value * 200 + " ml"
          : template.value + " Ly";
      return { ...template, displayValue: newValue };
    });
    setDisplayedTemplates(updatedTemplates);
  }, [selectedValue]);

  const handleChooseTemplate = (value: string) => {
    chooseLevel(parseInt(value));
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleBack = () => {
    navigation.navigate("Home");
  };
  const templates: Template[] = [
    {
      id: "1",
      name: "Mùa hè",
      value: 10,
      icon: "https://cdn-icons-png.flaticon.com/512/10484/10484158.png",
    },
    {
      id: "2",
      name: "Thể thao",
      value: 7,
      icon: "https://cdn-icons-png.flaticon.com/512/1041/1041168.png",
    },
    {
      id: "3",
      name: "Mùa đông",
      value: 5,
      icon: "https://cdn-icons-png.flaticon.com/512/2336/2336319.png",
    },
    {
      id: "4",
      name: "Trẻ em",
      value: 4,
      icon: "https://cdn-icons-png.flaticon.com/512/523/523495.png",
    },
  ];

  const renderTemplate = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={[styles.templateBox, { backgroundColor: colors.optionBox }]}
      onPress={() => handleChooseTemplate(item.value)}
    >
      <Image
        source={{
          uri: item.icon,
        }}
        style={styles.icon}
      />
      <Text style={styles.templateName}>{item.name}</Text>
      <Text style={[styles.templateValue, { color: colors.text }]}>
        {item.displayValue}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backIcon}>
          <AntDesign name="arrowleft" size={24} color="#1976D2" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={[styles.headerText, { color: colors.text }]}>
            Đặt Mục Tiêu
          </Text>
        </View>
      </View>

      <View style={styles.goalContainer}>
        <View style={styles.flag}>
          <Text style={styles.flagText}>{maxLevel}</Text>
        </View>
      </View>

      <Dropdown
        style={styles.dropdown}
        data={[
          { label: "Số ly nước", value: "Số ly nước" },
          { label: "Số ml", value: "Số ml" },
        ]}
        labelField="label"
        valueField="value"
        value={selectedValue}
        onChange={(item) => setSelectedValue(item.value)}
        placeholder="Đơn vị: Số ly nước"
      />
      <View
        style={[styles.sectionContainer, { backgroundColor: colors.subBg }]}
      >
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Mục tiêu uống nước
        </Text>
        <Text style={styles.sectionSubtitle}>
          Chúng tôi đã chuẩn bị nhiều mục tiêu cho bạn!
        </Text>
        <TextInput
          style={[styles.searchBox, { backgroundColor: colors.searchBox }]}
          placeholder="Tìm kiếm theo template"
        />

        <FlatList
          data={displayedTemplates}
          numColumns={2}
          renderItem={renderTemplate}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={styles.templateRow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 56,
    marginLeft: 16,
    gap: 10,
  },
  backIcon: {
    position: "absolute",
    top: "5%",
    left: "2%",
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 21,
    fontWeight: "600",
  },
  goalContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },

  flag: {
    width: 80,
    height: 80,
    borderColor: "#000",
    borderRightWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(25, 118, 210, 0.8)",
  },

  flagText: {
    fontSize: 63,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  dropdown: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 61,
    width: "60%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  sectionContainer: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 36,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.16,
    shadowRadius: 45,
    shadowColor: "#1BA9E1",
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
  },
  sectionSubtitle: {
    fontSize: 14,
    color: "#90A5B4",
    marginBottom: 36,
    textAlign: "center",
  },
  searchBox: {
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
  },
  templateRow: {
    justifyContent: "space-between",
  },
  templateBox: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    margin: 5,
    borderWidth: 0.5,
    borderColor: "#D0DBE2",
  },
  icon: {
    height: 24,
    width: 24,
    marginBottom: 10,
  },
  templateName: {
    fontSize: 12,
    fontWeight: "500",
    color: "#90A5B4",
  },
  templateValue: {
    fontSize: 16,
    color: "#141A1E",
    marginTop: 5,
    fontWeight: "600",
  },
});

export default SetGoal;
