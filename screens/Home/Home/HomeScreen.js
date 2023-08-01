import React, { useLayoutEffect, useState, useEffect } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Search from "../../../components/Search";
import { Button } from "react-native-elements";
import Item from "../../../components/Item";
import { db } from "../../../services/firebase";
import { ActivityIndicator } from "react-native-paper";

const Home = ({ navigation }) => {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = React.useState({});
  const [pode, setPode] = React.useState(false);

  const navegar = (id) => {
    navigation.navigate("Detalhes", {
      id: id,
    });
  };

  const pegarDados = async () => {
   db.collection("Rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Mar & Sol",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 30,
        fontFamily: "Montserrat-Regular",
      },
    });
    return () => {};
  }, [navigation]);

  useEffect(() => {
    pegarDados();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar type="dark-content" translucent />
      <Search />
      {rooms.length>0 && (
        <View>
          <View style={styles.header}>
            <Text style={styles.titulo}>Recomendados</Text>

            <Text style={{ fontFamily: "Montserrat-Regular" }}>Ver todos</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {rooms.map(({ id, data }) => (
              <Item key={id} item={data} navegar={() => navegar(id)} />
            ))}
          </ScrollView>
        
        </View>
      )}
      {rooms.length===0 && <ActivityIndicator size="small" color="orange" />}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  headerLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    marginLeft: 20,
  },
  headerRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 80,
    marginRight: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Montserrat-Regular",
  },
});
