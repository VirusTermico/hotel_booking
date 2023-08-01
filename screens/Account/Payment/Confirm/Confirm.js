import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { auth } from "../../../../services/firebase";

import moment from "moment";
import DateRangePicker from "rnv-date-range-picker";
import Botao from "../../../../components/Botao";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../../../constants/theme";

const { width } = Dimensions.get("window");

const Confirm = ({ navigation, route }) => {
  const [selectedRange, setRange] = React.useState({});
  const [pode, setPode] = useState(false);
  const [abre, setabre] = React.useState(false);
  const [quarto,setQuarto]=React.useState({})

 
  useEffect(() => {
   setQuarto({
     preco:route.params.room.preco,
     foto:route.params.room.fotos[0],
     nome:route.params.room.nome,
     id:route.params.id
   })
  }, [route]);

  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={{ uri: route.params.room.fotos[0] }}
        style={{
          width: width,
          height: width / 2,
          backgroundColor: "green",
        }}
        resizeMode="stretch"
      >
        <View style={styles.darkLayer} />

        <View style={{ position: "absolute", left: 20, bottom: 30 }}>
          <Text style={styles.title}>{route.params.room.nome}</Text>
          <Text style={styles.title}>
            {route.params.room.preco}
            <MaterialIcons name="attach-money" color="#fff" size={12} />
          </Text>
        </View>
      </ImageBackground>

      <View
        style={{ backgroundColor: "grey", position: "absolute", left: 180 }}
      ></View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          flexDirection: "row",
          margin: 20,
          justifyContent: "flex-start",
        }}
        onPress={() => setabre(!abre)}
      >
        <Text style={{ paddingRight: 2 }}>Escolher datas</Text>
        <AntDesign name={!abre ? "down" : "up"} color="black" size={18} />
      </TouchableOpacity>
      {abre && (
        <View style={{ marginHorizontal: 20, width: width - 40 }}>
          <DateRangePicker
            onSelectDateRange={(range) => {
              setRange(range);
              setPode(true);
            }}
            responseFormat="DD-MM-YYYY"
            minDate={moment().subtract(100, "days")}
          />
        </View>
      )}
      {pode && (
        <View style={styles.footer}>
          <View style={styles.checkBox}>
            <Text style={styles.title}>Check In</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="calendar" color="white" size={20} />
              <Text
                style={{ fontWeight: "700", paddingLeft: 5, color: "white" }}
              >
                {selectedRange.firstDate}
              </Text>
            </View>
          </View>
          <View style={styles.checkBox}>
            <Text style={styles.title}>Check Out</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="calendar" color="white" size={20} />
              <Text
                style={[
                  { fontWeight: "700", paddingLeft: 5, color: "white" },
                  styles.title,
                ]}
              >
                {selectedRange.secondDate}
              </Text>
            </View>
          </View>
        </View>
      )}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Botao text="Continuar" onPress={()=>navigation.replace("Método de Pagamento",{
            quarto:quarto,
            check_in:selectedRange.firstDate,
            check_out:selectedRange.secondDate,
            
        })} />
      </View>
    </ScrollView>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  circlular: {
    width: 40,
    height: 40,
    backgroundColor: "orange",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  linha: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    width: 130,
  },
  data: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Montserrat-Regular",
    color: "#fff",
  },
  darkLayer: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#000000",
    opacity: 0.4,
  },
});
