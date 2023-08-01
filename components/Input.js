import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import { COLORS } from "../constants/theme";
const { width, heigth } = Dimensions.get("window");

const Input = ({ placeholder, icon, password,value,onChangeText, ...rest }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome name={icon} />
      </View>
      <TextInput
        style={styles.input}
        secureTextEntry={password}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      ></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: width - 60,
    height: 48,
    backgroundColor: COLORS.lightGray2,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "#ffffff",

  },
  input: {
    backgroundColor: COLORS.lightGray2,
    borderColor: "#ffffff",
    fontWeight: "600",
    fontSize: 12,
    color: "#000",
    fontFamily: "Montserrat-Regular",
    paddingLeft: 15,
    width:300
  },
  icon: {
    paddingLeft: 20,
  },
});
