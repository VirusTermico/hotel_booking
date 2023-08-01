import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS } from "../../../../constants/theme";
import Botao from "../../../../components/Botao";
import {db,auth} from '../../../../services/firebase'
const AddReview = ({navigation}) => {
  const [defaultValor, setdefaultValor] = useState(2);
  const [maxRating, setMax] = useState([1, 2, 3, 4, 5]);
  const [valor, setValor] = useState("");

  const addComentario = () => {
    db.collection("Reviews")
      .add({
        data:Date.now(),
        ranking: defaultValor,
        content:    valor,
        user: auth.currentUser.email,
      })
      .then(() => {
        navigation.replace("Home")
      });
  };
  const CustomRating = () => {
    return (
      <View style={styles.customRating}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity onPress={() => setdefaultValor(item)} key={item}>
              <AntDesign
                name="star"
                size={24}
                color={item <= defaultValor ? "orange" : "grey"}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Classifique a tua estadia</Text>

      <View style={{ alignContent: "center", justifyContent: "center" }}>
        <CustomRating />

        <Text>Adicionar </Text>

        <View>
          <TextInput
            label="Digite aqui"
            onChangeText={(text) => setValor(text)}
            value={valor}
            numberOfLines={15}
            multiline={true}
            style={styles.input}
            borderColor="grey"
          />
        </View>
      </View>
      <View style={{ marginTop: 40 }}>
        
        <Botao text="Submeter" onPress={()=>addComentario()} />
      </View>
    </View>
  );
};

export default AddReview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    marginTop: 30,
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
  },
  ranking: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    width: 250,
    justifyContent: "space-around",
  },
  input: {
    width: 400,
    height: 300,
    alignContent: "flex-start",
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: COLORS.lightGray1,
    textAlignVertical: "top",
  },
  customRating: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
