import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Images from "../../../constants/images";
import Input from "../../../components/Input";
import Botao from "../../../components/Botao";
import { auth } from "../../../services/firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");

const Login = ({ navigation, params }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");


  
  const signIn = async (email, senha) => {
    try {
      await auth.signInWithEmailAndPassword(email, senha).then(() => {
        navigation.replace("Main")
     

      });
    } catch (error) {
      Alert.alert(
        "Erro",
        error.message +
          "O que fazer agora"[
            ({
              text: "Ok",
              onPress: () => console.log("Ok"),
              style: "cancel",
            },
            {
              text: "Criar Conta",
              onPress: () => navigation.push("register"),
              style: "cancel",
            })
          ]
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      enabled
    >
      <StatusBar style="light" />

      <View style={styles.container}>
        <ImageBackground
          source={Images.HOTEL2}
          style={{ width: width, height: height }}
        >
          <View style={styles.darkLayer} />
          <View style={styles.logo}>
            <Image source={Images.LOGO} />
          </View>
          <View style={styles.text}>
            <Text style={styles.textTitle}>Bem-Vindo</Text>
          </View>
          <View style={styles.input}>
            <Input
              placeholder="Endereço de email"
              icon="user"
              onChangeText={(text) => setEmail(text)}
            />
            <View style={{ marginTop: 25 }} />
            <Input
              placeholder="Senha"
              icon="user"
              password
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View
            style={{
              marginTop: 37,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Botao text="Entrar" onPress={() =>signIn(email, password)} />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subtitle}>Não tem uma Conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={{ color: "orange", marginLeft: 10 }}>
                Criar Conta
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  logo: {
    top: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 85,
  },
  textTitle: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Montserrat-Regular",
  },
  input: {
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    color: "#fff",
    fontSize: 12,
  },
  subContainer: {
    marginTop: 20,
    width: width,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
