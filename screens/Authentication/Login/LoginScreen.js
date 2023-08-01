import React, { useState } from "react";
import { StyleSheet, View, Alert,Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Image, Button } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import {auth} from "../../../services/firebase";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import Images from "../../../constants/images";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visivel, setVisible] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Mar & Sol",
      headerStyle: { backgroundColor: "#00B4D8" },
      headerTintColor: "#fff",
      headerTintStyle: { color: "black" },
      alignTitleHeader: "center",
      headerShown:true,
      

      headerTitle: () => (
        <View>
          <Text style={{fontFamily:"Montserrat-Regular"}}>Login</Text>
        </View>
      ),
    
    });
  }, [navigation]);

 
  const trocar=()=>{
    if(visivel){
      setVisible(false)

    }else{
      setVisible(true)

    }

  }
  


  const signIn = async (email, senha) => {
    try {
      await auth.signInWithEmailAndPassword(email, senha).then(()=>{

      })

    } catch (error) {
      Alert.alert(
        "Beno",
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
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={Images.LOGO}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
         
          type="password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          rightIcon={
            <TouchableOpacity activeOpacity={0.5} onPress={()=>trocar()}>

            {
             visivel ?<AntDesign name="eye" size={24} color="black" />:<AntDesign name="eyeo" size={24} color="black" />
            }
            </TouchableOpacity>
          }
        />
      </View>
      <Button
        disabled={email.length?false:true}
        containerStyle={styles.button}
        onPress={() => {
          signIn(email, password);
        }}
        title="Login"
      />
      <Button
        containerStyle={styles.button}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
        type="outline"
        title="Criar Conta"
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    width: 280,
    marginTop: 10,
  },
});
