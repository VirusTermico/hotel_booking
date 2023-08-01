import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  Alert,
  Pressable,
  Image,
} from "react-native";
import { Divider } from "react-native-elements";
import Botao from "../../../../components/Botao";
import MyCard from "../../../../components/MyCard";
import Images from "../../../../constants/images";
import { db,auth } from "../../../../services/firebase";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const Method = ({ navigation, route }) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(0);
  const [done, setDone] = React.useState(false);


  const pegarDados = async () => {
      db.collection("Cards").onSnapshot((snapshot) => {
      setCards(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  const fazerReserva =async () => {
   await db.collection("Reservas")
      .add({
        check_in: route.params.check_in,
        check_out: route.params.check_out,
        data_registo: Date.now(),
        duracao: 6,
        room: route.params.quarto.nome,
        foto: route.params.quarto.foto,
        status: 0,
        valor: route.params.quarto.preco,
        user: auth.currentUser.email,
      })
      .then(() => {
        setDone(true);
        navigation.replace("Home")
      });
  };
  useEffect(() => {
    pegarDados();
  }, []);
  return (
    <View style={styles.container}>
      {cards.length > 0 && (
        <View>
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              fontSize: 18,
              margin: 20,
            }}
          >
            Selecione um cartão:
          </Text>
          <Divider />
          <View style={{ height: 80 }} />
          <ScrollView showsVerticalScrollIndicator={false}>
            {cards.map(({ id, data }) => (
              <MyCard
                imagem={Images.PAYPAL}
                numero={data.numero}
                isSeletected={(id) => {
                  setSelectedCard(data.numero);
                }}
              />
            ))}
            <View
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
                marginHorizontal: 20,
                padding: 20,
              }}
            >
              <Text style={{ fontSize: 20 }}>Total:</Text>
              <Text
                style={{
                  fontWeight: "700",
                  fontFamily: "Montserrat-Regular",
                  fontSize: 20,
                }}
              >
                {route.params.quarto.preco}
                <MaterialIcons name="attach-money" color="black" size={12} />
              </Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Botao text="Reservar" onPress={() => fazerReserva()} />
            </View>
            {done && (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={Images.CHECK_CIRCLE}
                  style={{ width: 80, height: 80 }}
                />
              </View>
            )}
          </ScrollView>
          <View style={{ height: 80 }} />
        </View>
      )}
      {cards.length === 0 && <ActivityIndicator size="small" color="orange" />}
    </View>
  );
};

export default Method;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
