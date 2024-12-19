import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
} from "react-native";
import TabBar from "../components/TabBar";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Profile() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hồ sơ của tôi</Text>
      <TouchableOpacity
        style={styles.editBtn}
        onPress={() => setIsEditing(!isEditing)}
      >
        <MaterialIcons name="edit" size={18} color="white" />
      </TouchableOpacity>

      <Image
        source={require("../../assets/avatar.png")}
        style={styles.profileImage}
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Họ</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Mai Đình"
          editable={isEditing}
        />

        <Text style={styles.label}>Tên</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Quốc Anh"
          editable={isEditing}
        />

        <Text style={styles.label}>Địa chỉ email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="anh1710@gmail.com"
          keyboardType="email-address"
          editable={isEditing}
        />

        <Text style={styles.label}>Tuổi</Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
          placeholder="22"
          keyboardType="numeric"
          editable={isEditing}
        />
        <Text style={styles.label}>Giới tính</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderOption,
              gender === "male" && styles.selectedGender,
            ]}
            onPress={() => setGender("male")}
            disabled={!isEditing}
          >
            <Text
              style={[
                styles.genderText,
                gender === "male" && styles.selectedGenderText,
              ]}
            >
              Nam
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderOption,
              gender === "female" && styles.selectedGender,
            ]}
            onPress={() => setGender("female")}
            disabled={!isEditing}
          >
            <Text
              style={[
                styles.genderText,
                gender === "female" && styles.selectedGenderText,
              ]}
            >
              Nữ
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderOption,
              gender === "other" && styles.selectedGender,
            ]}
            onPress={() => setGender("other")}
            disabled={!isEditing}
          >
            <Text
              style={[
                styles.genderText,
                gender === "other" && styles.selectedGenderText,
              ]}
            >
              Khác
            </Text>
          </TouchableOpacity>
        </View>
        {isEditing && (
          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveBtnText}>Cập nhật</Text>
          </TouchableOpacity>
        )}
      </View>
      <TabBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingTop: 40,
    flexDirection: "column",
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 18,
  },
  editBtn: {
    borderRadius: 50,
    backgroundColor: "#1976D2",
    padding: 6,
    position: "absolute",
    top: 58,
    right: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#1976D2",
    marginVertical: 8,
  },
  inputContainer: {
    width: "80%",
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#90A5B4",
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 46,
    paddingHorizontal: 10,
    backgroundColor: "#rgba(25, 118, 210, 0.1)",
    borderRadius: 8,
    marginBottom: 16,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  genderOption: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "30%",
    alignItems: "center",
  },
  selectedGender: {
    backgroundColor: "#1976D2",
    borderColor: "#1976D2",
    color: "#fff",
  },
  genderText: {
    color: "#333",
    fontSize: 16,
  },
  selectedGenderText: {
    color: "#FFF",
  },
  saveBtn: {
    backgroundColor: "#1976D2",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  saveBtnText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
});
