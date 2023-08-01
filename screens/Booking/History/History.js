import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import BookingList from "../../../components/BookingList";
import { db } from "../../../services/firebase";

const History = ({ navigation }) => {
  const [itens, setReservas] = useState([]);
  const [room, setRoom] = React.useState({});
  const [pode, setPode] = React.useState(false);

  const pegarQuarto = () => {
    db.collection("Rooms")
      .doc(route.params.id)
      .onSnapshot((d) => {
        setRoom(d.data());
        setPode(true);
      });
  };

  const pegarDados = async () => {
    db.collection("Reservas").onSnapshot((snapshot) => {
      setReservas(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };
  useEffect(() => {
    pegarDados();
  }, [itens]);
  return (
    <View style={styles.container}>
      {itens.length > 0 && (
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {itens.map(({ id, data }) => (
              data.status===1?
              <BookingList item={data} key={id} />:<View></View>
            ))}
          </ScrollView>
        </View>
      )}
      {itens.length === 0 && (
        <ActivityIndicator
          style={styles.carregando}
          size="small"
          color="orange"
        />
      )}
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carregando: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
  },
});
