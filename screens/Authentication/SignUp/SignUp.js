import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Alert,
  KeyboardAwareScrollView,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,TouchableOpacity
} from "react-native";
import Images from "../../../constants/images";
import Input from "../../../components/Input";
import Botao from "../../../components/Botao";
import { auth, db } from "../../../services/firebase";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");

const SignUp = ({ navigation,params }) => {
  const [nome, setNome] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [telefone, setTelefone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const  [pode,setPode]=React.useState(false)
  const creatAccount = async (nome, cpf, telefone, email, senha) => {
    try {
      setPode(true)

      await auth
        .createUserWithEmailAndPassword(email, senha)
        .then((authUser) => {
          authUser.user.updateProfile({
            displayName: nome,
            photoURL:
              "https://clube.spm.pt/files/1(15).png",
          });

          db.collection("users").add({
            displayName:nome,
            photoURL: "https://clube.spm.pt/files/1(15).png",
            email:email,
            telefone:telefone,
            cpf:cpf
          });
         navigation.replace("Main")
          setPode(false)
        })
        .catch((error) => alert(error.message));
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
      keyboardVerticalOffset={Platform === "ios" ? 40 : 0}
    >
      <ScrollView>
        <StatusBar style="light" />
        <ImageBackground
          source={Images.HOTEL2}
          style={{ width: width, height: height }}
        >
          <View style={styles.darkLayer} />
          <View style={styles.logo}>
            <Image source={Images.LOGO} />
          </View>
          <View style={styles.text}>
            <Text style={styles.textTitle}>Criar Conta</Text>
          </View>
          <View style={styles.input}>
            <Input
              placeholder="Nome Completo"
              icon="user"
              value={nome}
              onChangeText={(text) => setNome(text)}
            />
            <View style={{ marginTop: 25 }} />
            <Input
              placeholder="CPF"
              icon="user"
              value={cpf}
              onChangeText={(text) => setCpf(text)}
            />
            <View style={{ marginTop: 25 }} />
            <Input
              placeholder="Telefone"
              icon="phone"
              value={telefone}
              onChangeText={(text) => setTelefone(text)}
            />
            <View style={{ marginTop: 25 }} />
            <Input
              placeholder="Email"
              icon="envelope-o"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <View style={{ marginTop: 25 }} />
            <Input
              placeholder="Senha"
              icon="lock"
              password
              value={password}
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
            <Botao
              text="Criar Conta"
              onPress={() => creatAccount(nome, cpf, telefone, email, password)}
            />
          </View>
          <View style={styles.subContainer}>
            <Text style={styles.subtitle}>Já tem uma Conta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={{ color: "orange", marginLeft: 10 }}>
               Entrar
              </Text>
            </TouchableOpacity>
          </View>
          {pode&&<ActivityIndicator size={30} color="orange"/>}
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
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
  }, subtitle: {
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
