import React from "react";
import { Pressable, StyleSheet,View } from "react-native";
import Colors  from '../assets/Colors/color';
import { LightText } from "./MainText";

const ListItem = (props) => {
    return(
        <Pressable {...props} style={({pressed})=>[{backgroundColor:pressed?'white':Colors.lightBlue},styles.listItem]} >
    <View>
      <LightText style={{...styles.text,...props.textStyle}} >{props.children}</LightText>
    </View>
  </Pressable>
    )
  
};

export default ListItem;

const styles = StyleSheet.create({
text:{
    textAlign:'center',
    color:Colors.naval,
},
listItem:{
borderWidth:3,
borderColor:Colors.goodRed,
marginVertical:3,
marginHorizontal:50,
borderRadius:0,
padding:13,
borderRadius:15,

}
});
