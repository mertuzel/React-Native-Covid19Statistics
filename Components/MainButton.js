import React from "react";
import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { BoldText, RegularText, LightText } from "./MainText";
import Colors from "../assets/Colors/color";

const MainButton = (props) => {
 
  return (
    <Pressable
     {...props}
      style={({ pressed }) => [
        { backgroundColor: pressed ? props.pressedColor : Colors.naval },
        styles.button,
      ]}
    >
      <View>
        <RegularText style={styles.buttonText}>{props.children}</RegularText>
      </View>
    </Pressable>
  );
};

export default MainButton;

const styles = StyleSheet.create({
  button: {
    borderWidth:3,
    borderRadius: 30,
    paddingVertical: 15,
    borderColor: Colors.goodRed,
    paddingHorizontal: 15,
    margin:1,
  },
  buttonText: {
    textAlign: "center",
    color: Colors.lightBlue,
  },

});
