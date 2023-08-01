import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,

} from "react-native";
import { Divider } from "react-native-elements";
import MyCard from "../../../../components/MyCard";
import Images from "../../../../constants/images";
import { db,auth } from "../../../../services/firebase";

const CardList = ({ navigation, route }) => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(0);
 
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

  
  useEffect(() => {
    pegarDados();
    console.log(cards);
  }, []);
  return (
    <View style={styles.container}>
      {cards.length > 0 && (
        <View>
          <View style={{ height: 80 }} />
          <ScrollView showsVerticalScrollIndicator={false}>
            {cards.map(({ id, data }) => (
              <MyCard
              key={id}
                imagem={Images.PAYPAL}
                numero={data.numero}
                isSeletected={(id) => {
                  setSelectedCard(data.numero);
                }}
              />
            ))}
            
           
          
           
          </ScrollView>
          <View style={{ height: 80 }} />
        </View>
      )}
      {cards.length === 0 && <ActivityIndicator size="small" color="orange" />}
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
