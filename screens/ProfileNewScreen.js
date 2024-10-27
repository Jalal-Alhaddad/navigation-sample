import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ProfileNewScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile New Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go Back"
          onPress={() => {
            props.navigation.goBack();
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
    // alignItems: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    margin: 10,
  },
});
