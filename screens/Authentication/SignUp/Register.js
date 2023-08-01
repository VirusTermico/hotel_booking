import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Button, Text } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import { auth, db } from "../../../services/firebase";

const RegisterScreen = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [foto, setFoto] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Voltar",
    });
  }, [navigation]);

  const signUp = (nome, email, senha, url) => {
    auth
      .createUserWithEmailAndPassword(email, senha)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: nome,
          photoURL:
            "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar style="light" />

      <Text h3 style={{ marginBottom: 50 }}>
        Criar uma conta
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Nome Completo"
          autoFocus
          type="text"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <Input
          placeholder="CPF"
          autoFocus
          type="text"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <Input
          placeholder="Telefone"
          autoFocus
          type="text"
          value={foto}
          onChangeText={(text) => setFoto(text)}
        />
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Url da foto "
          autoFocus
          type="text"
          value={foto}
          onChangeText={(text) => setFoto(text)}
        />
      </View>
      <Button
        containerStyle={styles.button}
        title="Criar Conta"
        onPress={() => signUp(nome, email, password, foto)}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 380,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
