import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { auth } from "../../services/firebase";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import AccountItem from "../../components/AccountItem";
import LogOut from "../../components/LogOut";

const Account = ({ navigation }) => {
  const [url, setUrl] = React.useState("");

  const navegar = (id) => {
    navigation.navigate(id);
  };
  React.useEffect(() => {
    setUrl(auth.currentUser.photoURL);
  });

  
  const handleSair = async () => {
    try {
      await auth.signOut().then(()=>{
     
        navigation.replace("Auth")});
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Avatar
        source={{
          uri: url,
        }}
        rounded
        size={100}
      />
      <Text style={styles.userName}>{auth.currentUser.displayName}</Text>
      <View style={{ height: 50 }} />
      <AccountItem
        label="Perfil"
        icon="user"
        navegar={() => navegar("Perfil")}
        rota="Perfil"
      />
      <View style={{ height: 30 }} />
      <AccountItem
        label="Cartões"
        icon="creditcard"
        navegar={() => navegar("Cartões")}
      />
      <View style={{ height: 30 }} />
      <Pressable onPress={()=>handleSair}>
        <LogOut label="Sair" icon="logout" navegar={handleSair} />
      </Pressable>
      <View style={{ height: 30 }} />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Montserrat-Regular",
  },
});
