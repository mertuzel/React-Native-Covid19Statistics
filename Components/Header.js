import React from "react";
import { StyleSheet, View } from "react-native";
import { BoldText} from "./MainText";
import Colors from "../assets/Colors/color";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="bacteria-outline"
          size={30}
          color={Colors.lightBlue}
        />
        <BoldText style={styles.headerText}>COVID 19 STATISTICS</BoldText>
        <MaterialCommunityIcons
          name="bacteria-outline"
          size={30}
          color={Colors.lightBlue}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.naval,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 120,
    borderBottomColor:Colors.niceBrown,
    borderBottomWidth:1,
  
  },
  headerText: {
    fontSize: 30,
    color: Colors.lightBlue,
    marginHorizontal: 6,
  },
  container: {
    flexDirection: "row",
    marginTop: 25,
    
  },
});
