import React, { useState } from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { TextInput, Button, Checkbox, Text } from "react-native-paper";

const { width, height } = Dimensions.get("window");

export default function LoginForm({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    navigation.replace("Main");
  };

  const handleSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        mode="outlined"
        keyboardType="email-address"
        left={<TextInput.Icon icon="email" />}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        mode="outlined"
        secureTextEntry
        left={<TextInput.Icon icon="lock" />}
      />
      <View style={styles.rememberMeContainer}>
        <Checkbox
          status={rememberMe ? "checked" : "unchecked"}
          onPress={() => setRememberMe(!rememberMe)}
          color="#4CAF50"
        />
        <Text style={styles.rememberMeText}>Remember Me</Text>
      </View>
      <Button
        mode="contained"
        onPress={handleSignIn}
        style={styles.signInButton}
        icon="login"
      >
        Sign In
      </Button>
      <Button
        mode="text"
        onPress={handleSignUp}
        style={styles.signUpButton}
        icon="account-plus-outline"
      >
        Sign Up
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%", // Adjust width to be responsive
    maxWidth: 400, // Max width to prevent it from getting too wide on large screens
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10, // Rounded corners
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // For Android shadow
    alignSelf: "center",
    marginTop: height * 0.1, // Center vertically
  },
  input: {
    marginBottom: 15,
    backgroundColor: "white",
  },
  rememberMeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  rememberMeText: {
    fontSize: 16,
  },
  signInButton: {
    marginTop: 10,
    paddingVertical: 5,
    backgroundColor: "#4CAF50", // Main color
    borderColor: "#4CAF50", // Match button border color to main color
    borderRadius: 5, // Similar rounding to TextInput
  },
  signUpButton: {
    marginTop: 10,
    color: "#4CAF50", // Main color for text
  },
});