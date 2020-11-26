import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from '../assets/Colors/color';

export const BoldText = (props) => {
    return (
      <Text {...props} style={{ ...props.style, ...styles.bold }}>
        {props.children}
      </Text>
    );
  };
  export const LightText = (props) => {
    return (
      <Text {...props} style={{ ...props.style, ...styles.light }}>
        {props.children}
      </Text>
    );
  };
  export const RegularText = (props) => {
    return (
      <Text {...props} style={{ ...props.style, ...styles.regular }}>
        {props.children}
      </Text>
    );
  };
  export const BoldRedText = (props)=>{
    return(
    <Text {...props} style={{...props.style,...styles.boldRedText}} >{props.children}</Text>
    )
  }



const styles = StyleSheet.create({
  bold: {
    fontFamily: "Merriweather-Bold",
  },
  regular: {
    fontFamily: "Merriweather-Regular",
  },
  light: {
    fontFamily: "Merriweather-Light",
  },
  boldRedText:{
    fontSize:16,
    fontFamily:'Merriweather-Bold',
    color:Colors.goodRed,
  }
});

