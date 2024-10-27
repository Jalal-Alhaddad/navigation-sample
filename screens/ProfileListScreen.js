import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProfileListScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile List Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="View Profile"
          onPress={() => {
            props.navigation.navigate("View");
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Edit Profile"
          onPress={() => {
            props.navigation.navigate("Edit");
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="New Profile"
          onPress={() => {
            props.navigation.navigate("New");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 15,
    // alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    margin: 10,
  },
});
