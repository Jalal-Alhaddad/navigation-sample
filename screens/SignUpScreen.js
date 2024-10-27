import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function SignUpScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <Text style={styles.text}>SignUp Screen</Text>
        <View style={styles.fixToText}>
          <Button
            title="Go Login"
            onPress={() => {
              props.navigation.navigate("Login");
            }}
          />
          <Button
            title="Goto Error"
            onPress={() => {
              props.navigation.navigate("Error", {
                errorMessage: "SignUp failed. Please try again later.",
              });
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    padding: 15,
    backgroundColor: "white",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  innerView: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    // marginHorizontal: 16,
    padding: 15,
    backgroundColor: "#d1f1ef",
    borderWidth: 2,
    borderColor: "#1b70e9",
    borderRadius: 10,
    // width: "100%",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
});
