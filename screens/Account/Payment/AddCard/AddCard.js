import React, { useLayoutEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,Keyboard, Alert
} from "react-native";
import { Outicons } from "@expo/vector-icons";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import Images from "../../../../constants/images";
import { SIZES, FONTS, COLORS } from "../../../../constants/theme";
import Input from "../../../../components/Input";
import Botao from "../../../../components/Botao";
import {firebase,db,auth} from '../../../../services/firebase'
const AddCard = ({ navigation }) => {
  const [nome, setNome] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [expira, setExpira] = React.useState("");



  
  const salvarCard = () => {
    Keyboard.dismiss();
    db.collection("Cards").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      nome: nome,
      numero:numero,
      expira_em: expira,
    }).then(()=>{
      setNumero("")
      setNome("")
      setExpira("")
      Alert.alert("Salvo")
    });

    

}

  function renderCard() {
    return (
      <ImageBackground
        source={Images.CARD}
        style={{
          height: 200,
          width: "100%",
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
      >
        <Image
          source={Images.SIM}
          resizeMode="contain"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            height: 40,
            width: 80,
          }}
        />
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 10,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h3,
              fontFamily: "Montserrat-Regular",
            }}
          >
            Gui Gonçalves
          </Text>

          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                flex: 1,
                color: COLORS.white,
                ...FONTS.body3,
                fontFamily: "Montserrat-Regular",
              }}
            >
              123 456 789
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body3,
                fontFamily: "Montserrat-Regular",
              }}
            >
              12/25
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Mar & Sol",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 30,
        fontFamily: "Montserrat-Regular",
      },

      headerRight: () => (
        <View style={{ marginLeft: 10, alignItems: "center" }}>
          <Outicons name="diff-added" />
        </View>
      ),
    });
    return () => {};
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderCard()}

        <View style={styles.input}>
          <Input
            placeholder="Nome"
            icon="user"
            onChangeText={(text) => setNome(text)}
          />
          <View style={{ marginTop: 25 }} />
          <Input
            placeholder="Número do cartão"
            icon="credit-card"
            onChangeText={(text) => setNumero(text)}
          />
          <View style={{ marginTop: 25 }} />
          <Input
            placeholder="Data de Expiração"
            icon="calendar"
            onChangeText={(text) => setExpira(text)}
          />
        </View>
        <View
          style={{
            marginTop: 37,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Botao text="Adicionar" onPress={() => salvarCard()} />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    paddingHorizontal: SIZES.padding,
  },
  input: {
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
  },
});
