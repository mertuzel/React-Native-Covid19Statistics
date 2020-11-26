import React from 'react';
import {StyleSheet,View} from 'react-native';
import Colors from '../assets/Colors/color';
import { RegularText } from './MainText';
const Card = props=>{
    return(
    <View style={styles.card} ><RegularText style={{...styles.cardText,...props.cardTextStyle}}>{props.children}</RegularText></View>

    )

};

export default Card;

const styles = StyleSheet.create({

    card:{
        width:'70%',
        backgroundColor:Colors.lightBlue,
        borderWidth:2,
        borderColor:Colors.naval,
        borderRadius:20,
        borderColor:Colors.naval,
        shadowColor:Colors.goodRed,
        shadowOffset:{width:8,height:8},
        shadowOpacity:0.9,
        shadowRadius:4,
        padding:10,
        
    },
    cardText:{
        textAlign:'left',
        letterSpacing:0.50,
        color:'white',
        lineHeight:30,
    }

});