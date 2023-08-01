import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { db, auth } from "../../../services/firebase";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { COLORS } from "../../../constants/theme";

const Profile = ({ navigation }) => {
  const [url, setUrl] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState({});
 
  const pegarDados = async () => {
    db.collection("users").onSnapshot((snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };



  
  React.useEffect(() => {
    pegarDados();
  }, []);

  React.useEffect(() => {
    setUrl(auth.currentUser.photoURL);
  });

  const handleSair = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {}, []);
  return (
    <View style={styles.container}>
   <Avatar
        source={{
          uri: url,
        }}
        rounded
        size={100}
      />
      <View style={{height:100}}></View>
      <View style={{alignItems:"flex-start"}}>
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.userName}>{auth.currentUser.displayName}</Text>
      </View>
  
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.userName}>{auth.currentUser.email}</Text>
      </View>
  
      <View style={{flexDirection:"row",alignItems:"center"}}>
      <Text style={styles.label}>Telefone:</Text>
      <Text style={styles.userName}>{auth.currentUser.displayName}</Text>
      </View>
  
      
  
    
      </View>
    

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
   paddingTop:20,  
    backgroundColor: "#fff",
  },
  userName: {
    fontSize: 24,
    color:COLORS.darkGray,
    fontFamily: "Montserrat-Regular",
  },
  label: {
    fontSize: 24,
    fontFamily: "Montserrat-Regular",
  },
});
