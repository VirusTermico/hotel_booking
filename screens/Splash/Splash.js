import React from "react";
import { StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Images from "../../constants/images";

const Splash = ({ navigation }) => {

  return (
    <LinearGradient
      colors={[ "#fcff9e", "#c67700"]}
      style={styles.container}
    >
      <Image source={Images.LOGO} />
    </LinearGradient>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
  flex:1,
  alignItems:"center",
  justifyContent:"center"
   
  },
 


  
});
