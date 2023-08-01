import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Input } from "react-native-elements";
import { TextInput } from "react-native-paper";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <FontAwesome style={styles.icon} name="search" size={20} />
        <Text style={styles.text}>Achar um hotel bem próximo</Text>
      </View>
      <View style={styles.right}>
        <FontAwesome style={styles.icon} name="filter" size={20} />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding:20
  },
  icon: {
    width: 20,
    height: 20,
  },
  text: {
    marginStart: 15,
    fontFamily:"Montserrat-Regular"
  },
  left: {
    flex: 1,
    flexDirection: "row",
    padding: 14,
    borderRadius: 8,
    marginRight: 15,
    borderWidth:0.5
  },
  right: {
    borderWidth:0.5,

    aspectRatio: 1,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "center",
  },
});
