import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Avatar, Button, Divider } from "react-native-elements";
import Swiper from "react-native-swiper";
import { AntDesign, MaterialIcons ,EvilIcons,FontAwesome} from "@expo/vector-icons";
import { db } from "../../../../services/firebase";
import Botao from "../../../../components/Botao";
import images from "../../../../constants/images";

const { width, height } = Dimensions.get("window");
const RoomDetails = ({ navigation, route }) => {
  const [room, setRoom] = React.useState({});
  const [pode, setPode] = React.useState(false);

  const pegarDados = () => {
    db.collection("Rooms")
      .doc(route.params.id)
      .onSnapshot((d) => {
        setRoom(d.data());
        setPode(true);
      });
  };

  const fazerReserva = () => {
    navigation.navigate("Confirmar Dados", {
      room: room,
      id: route.params.id,
    });
  };
  React.useLayoutEffect(() => {
    pegarDados();
  }, [route]);

  return (
    <ScrollView style={styles.container}>
      {pode && (
        <ScrollView>
          <Swiper
            autoplay
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            style={{ height: 300 }}
          >
            {room.fotos.map((slide) => {
              return (
                <View style={styles.slides} key={slide}>
                  <Image
                    source={{ uri: slide }}
                    key={slide}
                    style={styles.image}
                  />
                </View>
              );
            })}
          </Swiper>
          <View style={styles.descricao}>
            <Text style={styles.title}>{room?.nome}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>Avaliação:{room?.ranking}</Text>
              <AntDesign name="star" color="orange" />
            </View>

            <Text>
              <AntDesign name="" />
              {room?.preco}
            </Text>
            <Divider />
            <Text numberOfLines={5}>{room?.descricao}</Text>
            <View>
              <Text style={styles.sub}>Serviços:</Text>
              <View
                style={{ flexDirection: "row", justifyContent: "space-evenly" }}
              >
                <AntDesign name="wifi" color="orange" size={35} />
                <MaterialIcons
                  name="emoji-food-beverage"
                  color="orange"
                  size={35}
                />
                <MaterialIcons name="food-bank" color="orange" size={35} />
              </View>
            </View>
          </View>
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Botao text="Fazer Reservar" onPress={() => fazerReserva()} />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={[{ margin: 10 }, styles.sub]}>Comentários</Text>
            <TouchableOpacity onPress={() => navigation.navigate("AddReview")} style={{marginRight:20}}>
              <EvilIcons name="pencil" size={25} color="black"  />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Avatar source={images.HOTEL2} rounded />
              <Text style={{ margin: 5 }}>Nome</Text>
            </View>

            <Text>Ranking</Text>
          </View>
          <View style={{ marginHorizontal: 45 }}>
            <Text>Gostei da Estadia</Text>
          </View>
        </ScrollView>
      )}

      {!pode && (
        <ActivityIndicator size={40} style={styles.carregando} color="orange" />
      )}
    </ScrollView>
  );
};

export default RoomDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: 300,
  },
  dot: {
    backgroundColor: "rgba(255,255,255,0.3)",
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
  slides: {
    alignItems: "center",
    justifyContent: "center",
  },
  carregando: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  descricao: {
    marginTop: 10,

    padding: 10,
  },
  sub: {
    marginTop: 10,
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    fontWeight: "bold",
  },
  title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    fontWeight: "bold",
  },
});
