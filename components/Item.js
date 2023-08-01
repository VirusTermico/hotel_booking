import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
  Alert,
} from "react-native";

const w = Dimensions.get("screen").width;
const Item = ({ item ,navegar}) => {
  return (
    <Pressable style={styles.card}  onPress={()=>navegar(item)}>
      <View>
        <Image style={styles.image} source={{ uri: item.fotos[0] }} />
        <Text style={{ fontWeight: "normal", fontSize: 14 }}>{item.nome}</Text>
        <Text style={{ fontWeight: "normal", fontSize: 14 }}>{item.ranking}</Text>
        <Text style={{ fontWeight: "normal", fontSize: 14 }}>{item.preco}</Text>
      </View>
    </Pressable>
  );
};

export default Item;

const styles = StyleSheet.create({
  image: {
    width: w * 0.85,
    height: w * 0.55,
    borderRadius: 10,
  },
  card: {
    padding: 10,
    shadowColor: "#222",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    backgroundColor: "#fff",
    marginRight: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
  preco: {
    fontWeight: "900",
    fontSize: 20,
    fontFamily: "Montserrat-Regular",
  },
});
