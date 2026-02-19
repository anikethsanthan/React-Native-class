import React from "react";
import { StyleSheet, Text, View } from "react-native";

const stackPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stack Page</Text>
      <Text style={styles.subtitle}>You've navigated to the stack page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});

export default stackPage;
