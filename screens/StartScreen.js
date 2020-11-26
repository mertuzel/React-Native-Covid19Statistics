import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../assets/Colors/color";
import { BoldText} from "../Components/MainText";
import MainButton from "../Components/MainButton";

const StartScreen = (props) => {
  return (
    <View style={styles.screen}>
    
      <View style={styles.belowScreen}>
        <BoldText style={{fontSize:25,color:Colors.goodRed}} >Search by </BoldText>
        <View style={styles.buttonContainer}>
          <MainButton  onPress={()=>props.selectedButton('Continent')} style={styles.button}>Continent</MainButton>
          <MainButton  onPress={()=>props.selectedButton('Country')} style={styles.button}>Country</MainButton>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.whitee,
  },
  belowScreen: {
    flex: 1,
    paddingHorizontal: 15,
    marginVertical: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 20,
  },
  button: {
    marginVertical: 20,
  },
});
