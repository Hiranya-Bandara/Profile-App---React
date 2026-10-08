
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
  Modal,
  Alert,
} from "react-native";

const profileImage = require("../../assets/images/profile.jpg");

export default function ProfileScreen() {
  const [name, setName] = useState("Hiranya Bandara");
  const [email, setEmail] = useState("hiranyabandara05@gmail.com");
  const [points, setPoints] = useState(0);

  const [modalVisible, setModalVisible] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const editProfile = () => {
    setNewName(name);
    setNewEmail(email);
    setModalVisible(true);
  };

  const saveProfile = () => {
    if (!newName.trim() || !newEmail.trim()) {
      Alert.alert("Error", "Please enter your name and email.");
      return;
    }

    setName(newName.trim());
    setEmail(newEmail.trim());
    setModalVisible(false);
    Alert.alert("Success", "Profile updated successfully.");
  };

  const increasePoints = () => {
    setPoints((currentPoints) => currentPoints + 1);
  };

  const decreasePoints = () => {
    setPoints((currentPoints) => Math.max(0, currentPoints - 1));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#172554" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Photo and Name */}
        <View style={styles.profileSection}>
          <View style={styles.imageBorder}>
            <Image
              source={profileImage}
              style={styles.profileImage}
              resizeMode="cover"
            />
          </View>

          <Text style={styles.name}>{name}</Text>
          <Text style={styles.course}>Computer Science Student</Text>
        </View>

        {/* Profile Details */}
        <View style={styles.detailsCard}>
          <Text style={styles.label}>NAME</Text>
          <Text style={styles.value}>{name}</Text>

          <View style={styles.divider} />

          <Text style={styles.label}>EMAIL</Text>
          <Text style={styles.value}>{email}</Text>

          <View style={styles.divider} />

          {/* Points with Plus and Minus Buttons */}
          <Text style={styles.label}>POINTS</Text>

          <View style={styles.pointsRow}>
            <Text style={styles.star}>★</Text>
            <Text style={styles.points}>{points}</Text>

            <View style={styles.pointsActions}>
              <TouchableOpacity
                style={styles.pointsButton}
                onPress={decreasePoints}
                activeOpacity={0.7}
                accessibilityLabel="Decrease points"
              >
                <Text style={styles.pointsButtonText}>−</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.pointsButton}
                onPress={increasePoints}
                activeOpacity={0.7}
                accessibilityLabel="Increase points"
              >
                <Text style={styles.pointsButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Edit Profile Button */}
        <TouchableOpacity
          style={styles.editButton}
          onPress={editProfile}
          activeOpacity={0.8}
        >
          <Text style={styles.editButtonText}>✎  Edit Profile</Text>
        </TouchableOpacity>

        <Text style={styles.footer}>My Profile • Version 1.0</Text>
      </ScrollView>

      {/* Edit Profile Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <Text style={styles.modalSubtitle}>
              Update your personal details
            </Text>

            <Text style={styles.inputLabel}>Full Name</Text>
            <TextInput
              style={styles.input}
              value={newName}
              onChangeText={setNewName}
              placeholder="Enter your name"
              placeholderTextColor="#9CA3AF"
            />

            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              style={styles.input}
              value={newEmail}
              onChangeText={setNewEmail}
              placeholder="Enter your email"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TouchableOpacity
              style={styles.saveButton}
              onPress={saveProfile}
              activeOpacity={0.8}
            >
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6FA",
  },

  header: {
    height: 58,
    backgroundColor: "#172554",
    alignItems: "center",
    justifyContent: "center",
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "bold",
  },

  content: {
    width: "100%",
    maxWidth: 500,
    alignSelf: "center",
    paddingHorizontal: 22,
    paddingBottom: 30,
  },

  profileSection: {
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 25,
  },

  imageBorder: {
    width: 125,
    height: 125,
    borderRadius: 63,
    backgroundColor: "#FFFFFF",
    padding: 5,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 60,
  },

  name: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#172554",
    marginTop: 16,
    textAlign: "center",
  },

  course: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 6,
  },

  detailsCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E9ECF2",
  },

  label: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#6B7280",
    letterSpacing: 1,
    marginBottom: 7,
  },

  value: {
    fontSize: 15,
    color: "#172033",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 18,
  },

  pointsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  star: {
    fontSize: 22,
    color: "#172554",
  },

  points: {
    fontSize: 16,
    color: "#172033",
  },

  pointsActions: {
    flexDirection: "row",
    marginLeft: "auto",
    gap: 8,
  },

  pointsButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#E8EEFF",
    alignItems: "center",
    justifyContent: "center",
  },

  pointsButtonText: {
    color: "#2449A5",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
  },

  editButton: {
    backgroundColor: "#2449A5",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 22,
  },

  editButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    color: "#9CA3AF",
    fontSize: 12,
    marginTop: 25,
  },

  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    padding: 22,
  },

  modalCard: {
    width: "100%",
    maxWidth: 420,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 22,
  },

  modalTitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#172554",
  },

  modalSubtitle: {
    fontSize: 13,
    color: "#6B7280",
    marginTop: 6,
    marginBottom: 22,
  },

  inputLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: "#374151",
    marginBottom: 7,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 14,
    color: "#172033",
    marginBottom: 17,
  },

  saveButton: {
    backgroundColor: "#2449A5",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 5,
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  cancelButton: {
    alignItems: "center",
    paddingVertical: 13,
  },

  cancelText: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "600",
  },
});
