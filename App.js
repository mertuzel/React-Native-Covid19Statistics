import React, { useState } from "react";
import { View, StyleSheet} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Header from "./Components/Header";
import StartScreen from './screens/StartScreen';
import ContinentScreen from './screens/ContinentScreen';
import CountryScreen from "./screens/CountryScreen";

const getFonts = () => {
  return Font.loadAsync({
    "Merriweather-Bold": require("./assets/Fonts/Merriweather-Bold.ttf"),
    "Merriweather-Regular": require("./assets/Fonts/Merriweather-Regular.ttf"),
    "Merriweather-Light": require("./assets/Fonts/Merriweather-Light.ttf"),
  });
};




export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [selected,setSelected]=useState('');
  
  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    ); // alert error
  }

  const selectedButtonHandler=(selectedString)=>{
   setSelected(selectedString);
  }
  const goBackHandler=(value)=>{
   setSelected(value);
  }
  

  let whichScreen;

  if(selected=='Continent'){
    whichScreen= <ContinentScreen goBackHandler={goBackHandler} />
  }
  else if(selected=='Country'){
    whichScreen = <CountryScreen goBackHandler={goBackHandler} />
  }
  
  else{
     whichScreen = <StartScreen selectedButton={selectedButtonHandler} />;
  }

  return (
    <View style={styles.screen}>
    <Header/>
    {whichScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  }
});
