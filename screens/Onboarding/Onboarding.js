import React from "react";

import { StyleSheet, Text, View, Image, Dimensions, Alert } from "react-native";
import Swiper from "react-native-swiper";
import slides from "../../constants/onboarding";
import Images from "../../constants/images";
import Botao from "../../components/Botao";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width, height } = Dimensions.get("window");
const Onboarding = ({ navigation }) => {
  const onClick = async () => {
    await AsyncStorage.setItem("@viewedOnboarding", "true");

    navigation.replace("Auth");
  };

  return (
    <View style={styles.container}>
      <Swiper
        autoplay
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        {slides.map((slide) => {
          return (
            <View key={slide.id} style={styles.slides}>
              <Image source={slide.imagem} style={styles.imagem} />
            </View>
          );
        })}
      </Swiper>
      <View style={styles.darkLayer} />
      <View style={styles.logoContainer}>
        <Image source={Images.LOGO} style={styles.logo} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titulo}>Hotel Mar & Sol</Text>
      </View>
      <View style={styles.button}>
        <Botao text="Comecar" onPress={() => onClick()} />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slides: {
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: width,
    height: height,
  },
  textContainer: {
    width: width,
    alignItems: "center",
    justifyContent: "center",
    bottom: 180,
    left: 30,
  },
  titulo: {
    fontWeight: "600",
    fontSize: 31,
    color: "#fff",
  },
  descricao: {
    fontWeight: "300",
    fontSize: 25,
  },
  dot: {
    backgroundColor: "rgba(255,255,255,0.3)",
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: "#fff",
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3,
  },
  logoContainer: {
    width: width,
    position: "absolute",
    top: 85,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {},
  textContainer: {
    width: 200,
    position: "absolute",
    left: 30,
    bottom: 180,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  button: {
    width: width,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    bottom: 81,
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
});
