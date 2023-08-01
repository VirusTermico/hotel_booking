import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import Images from "../constants/images";
import { COLORS } from "../constants/theme";
const MyCard = ({ imagem, numero, isSeletected }) => {
  const [selected, setselected] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={imagem} style={{ width: 30, height: 30 }} />
      <Text>{numero}</Text>
      <TouchableOpacity
        onPress={() => {
          setselected(!selected);
          if (selected) {
            isSeletected(numero);
          }
        }}
      >
        <Image
          source={selected ? Images.CHECK_ON : Images.CHECK_OFF}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    padding: 20,
    borderColor: COLORS.lightOrange,
    borderWidth: 2,
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
