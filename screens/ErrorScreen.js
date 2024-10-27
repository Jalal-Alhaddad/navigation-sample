import React from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import CustomButton from '../components/CustomButton';

export default function ErrorScreen(props) {
  const { errorMessage } = props.route.params || {};

  return (
    <View style={styles.container}>

        <Text style={styles.errorText}>
          {errorMessage || "An unexpected error occurred."}
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.goBackButton}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>

    </View>
    // <View style={styles.container}>
    //   <Text style={styles.text}>Error Screen</Text>
    //   <CustomButton title="Go Back" onPress={() => props.navigation.goBack()} />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 18,
    color: "#941a1d", // Red color for error text
    textAlign: "center",
    marginBottom: 20,
  },
  goBackButton: {
    backgroundColor: "#941a1d", // Red color for button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff", // White text color on button
    fontSize: 16,
    textAlign: "center",
  },
  innerView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // marginHorizontal: 16,
    padding: 15,
    backgroundColor: "#f3ec9c",
    borderWidth: 2,
    borderColor: "#978c15",
    borderRadius: 10,
    // width: "100%",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
});