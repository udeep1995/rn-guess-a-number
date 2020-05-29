import React from "react";
import { View, StyleSheet, Text, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import DefaultStyle from "../constants/default-styles";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";
const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyle.title}>Game Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          fadeDuration={1000}
          source={{
            uri:
              "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
          }}
          // source={require("../assets/success.png")}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}<Text style={styles.highlight}>{props.userNumber}</Text> 
        </BodyText>
      </View>
          <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
  resultText:{
    textAlign: "center",
    fontSize:20
  },
  resultContainer:{
      marginHorizontal: 30,
      marginVertical: 20
  },
});
export default GameOverScreen;
