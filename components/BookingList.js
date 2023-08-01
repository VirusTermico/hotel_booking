import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Divider } from "react-native-elements";
import Images from "../constants/images";
import { COLORS } from "../constants/theme";

const { width } = Dimensions.get("window");
const BookingList = ({ item,foto }) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: COLORS.gray, marginStart: 10 }}>
        {item.data_registo}
      </Text>
      <View style={styles.midle}>
      { item && ( <Image
          source={{ uri: item.foto }}
          style={{ width: 130, height: 100, borderRadius: 16 }}
          resizeMode="contain"
        />)}
        <View style={styles.details}>
          <Text style={styles.title}>{item.room} </Text>
          <Text>{item.status} </Text>

          <Text style={{ color: "orange", fontWeight: "700" }}>
            {item.valor} reais
          </Text>
        </View>
      </View>
      <Text style={{ color: COLORS.gray2, marginStart: 10 }}>
        Duração:{item.duracao} dias
      </Text>

      <View style={styles.footer}>
        <View style={styles.checkBox}>
          <Text>Check In</Text>
          <Text style={{ fontWeight: "700" }}>{item.check_in}</Text>
        </View>
        <View style={styles.checkBox}>
          <Text>Check Out</Text>
          <Text style={{ fontWeight: "700" }}>{item.check_out}</Text>
        </View>
      </View>
      <View style={{ height: 10 }} />
      <Divider />
    </View>
  );
};

export default BookingList;

const styles = StyleSheet.create({
  container: { flex: 1, margin: 5 },
  midle: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  details: {
    flex: 1,
    marginHorizontal: 5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: width,
  },
  checkBox: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    width: 180,
  },
  title: {
    fontFamily: "Montserrat-Regular",
  },
});
