import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <ScrollView style={styles.titleContainer}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileTitle}>Profile</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          placeholderTextColor="#999"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          placeholderTextColor="#999"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          placeholder="Enter your phone number"
          style={styles.input}
          placeholderTextColor="#999"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="phone-pad"
        />

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Name: {name || "Not provided"}</Text>
          <Text style={styles.infoText}>Email: {email || "Not provided"}</Text>
          <Text style={styles.infoText}>Phone: {phone || "Not provided"}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    marginTop: 60,
    backgroundColor: "#f0f0f0",
  },
  profileContainer: {
    padding: 20,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 15,
    marginBottom: 8,
  },
  text: {
    fontSize: 24,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 12,
    marginBottom: 15,
    color: "#333",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  itemContainer: {
    color: "#333",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    width: "100%",
    margin: 10,
  },
  itemText: {
    color: "black",
  },
  infoBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    marginVertical: 5,
    fontWeight: "500",
  },
});
