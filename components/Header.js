import { freeze } from "immer";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { Fonts } from "../assets/fonts";
const Header = () => {

  const signOut = () => {
  
    auth.signOut()
    .then(() => {
    });
};


  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text  style={styles.subtitulo}>Encontre o quarto perfeito</Text>
        <Text style={styles.titulo}>Encontre o quarto perfeito</Text>
      </View>
      <View>
          <FontAwesome name="bell" color="black" size={18}/>
      </View>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    flex:1,
  },
  left:{

  },
  titulo: {
    fontFamily: Fonts.Regular,
    fontSize: 23,
  },
  subtitulo: {
    color: "grey",
    fontSize:18
  },
});
