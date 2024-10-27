import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

export default function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4CAF50", // Button color
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 24, // Horizontal padding
    borderRadius: 8, // Rounded corners
    alignItems: "center", // Center text
  },
  buttonText: {
    color: "#fff", // Text color
    fontSize: 16, // Font size
    // fontWeight: "bold", // Bold text
  },
});
