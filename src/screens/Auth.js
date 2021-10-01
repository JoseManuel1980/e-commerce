import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import logo from "./../../assets/logoPez.png";
import logo2 from "./../../assets/logo.png";
import { layoutStyle } from "./../styles/index";
import RegisterForm from "./../components/Auth/RegisterForm";
import LoginForm from "./../components/Auth/LoginForm";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);

  const changeForm = () => setShowLogin(!showLogin);

  return (
    <View style={[layoutStyle.container]}>
      <Image style={styles.logo} source={logo} />
      <Image style={styles.logo2} source={logo2} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {showLogin ? (
          <LoginForm changeForm={changeForm} />
        ) : (
          <RegisterForm changeForm={changeForm} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
  },
  logo2: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
    tintColor: "#0098d3",
  },
});
