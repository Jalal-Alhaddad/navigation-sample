import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import LoginForm from "../components/LoginForm";

export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <LoginForm navigation={props.navigation} />
      {/* <View style={styles.innerView}>
        <Text style={styles.text}>Login Screen</Text>
        <View style={styles.fixToText}>
          <Button
            title="Go SignUp"
            onPress={() => {
              props.navigation.navigate("SignUp");
            }}
          />
          <Button
            title="Login to Home"
            onPress={() => {
              props.navigation.navigate("Main");
            }}
          />
          <Button
            title="Goto Error"
            color="#4CAF50"
            onPress={() => {
              props.navigation.navigate("Error", {
                errorMessage: "Login failed. Please try again later.",
              });
            }}
          />
        </View>
      </View>*/}
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
    backgroundColor: "#f3ec9c",
    borderWidth: 2,
    borderColor: "#978c15",
    borderRadius: 10,
    // width: "100%",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});
