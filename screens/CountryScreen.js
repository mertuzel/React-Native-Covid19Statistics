import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import MainButton from "../Components/MainButton";
import Colors from "../assets/Colors/color";
import { BoldRedText, BoldText, RegularText } from "../Components/MainText";
import ListItem from "../Components/ListItem";
import Card from "../Components/Card";

const CountryScreen = (props) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isSpesific, setIsSpesific] = useState(false);

  const getCountries = async () => {
    let url =
      "https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&allowNull=false";
      try {
         let response = await fetch(url);
    let data = await response.json();
    setCountries(data);
    setIsSpesific(false);
      } catch (error) {
        console.log(error);
      }
   
  };
  const selectedCountryHandler = (currCountry) => {
    setSelectedCountry(currCountry);
    setIsSpesific(true);
  };
  let whichContent;
  if (!isSpesific) {
    whichContent = (
      <FlatList
        keyExtractor={(item) => item.country}
        data={countries}
        renderItem={(itemData) => (
          <ListItem
            onPress={() => selectedCountryHandler(itemData.item.country)}
          >
            {itemData.item.country}
          </ListItem>
        )}
      ></FlatList>
    );
  } else {
    let printCountry;
    countries.map((singlecountry) => {
      if (singlecountry.country == selectedCountry) {
        printCountry = singlecountry;
      }
    });
    whichContent = (
      <ScrollView>
        <View style={styles.cardContainer} >
          <Card>
    <BoldText style={{fontSize:25,color:Colors.goodRed}} >{printCountry.country}{'\n'}</BoldText>
    <RegularText>Population:<BoldRedText>{printCountry.population}{'\n'}</BoldRedText></RegularText>
    <RegularText>Active:<BoldRedText>{printCountry.active}{'\n'}</BoldRedText></RegularText>
    <RegularText>ActivePerOneMillion:<BoldRedText>{printCountry.activePerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>Cases:<BoldRedText>{printCountry.cases}{'\n'}</BoldRedText></RegularText>
    <RegularText>CasesPerOneMillion:<BoldRedText>{printCountry.casesPerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>Critical:<BoldRedText>{printCountry.critical}{'\n'}</BoldRedText></RegularText>
    <RegularText>CriticalPerOneMillion:<BoldRedText>{printCountry.criticalPerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>Deaths:<BoldRedText>{printCountry.deaths}{'\n'}</BoldRedText></RegularText>
    <RegularText>DeathsPerOneMillion:<BoldRedText>{printCountry.deathsPerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>Recovered:<BoldRedText>{printCountry.recovered}{'\n'}</BoldRedText></RegularText>
    <RegularText>RecoveredPerOneMillion:<BoldRedText>{printCountry.recoveredPerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>Tests:<BoldRedText>{printCountry.tests}{'\n'}</BoldRedText></RegularText>
    <RegularText>TestsPerOneMillion:<BoldRedText>{printCountry.testsPerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>TodayCases:<BoldRedText>{printCountry.todayCases}{'\n'}</BoldRedText></RegularText>
    <RegularText>TodayDeaths:<BoldRedText>{printCountry.todayDeaths}{'\n'}</BoldRedText></RegularText>
    <RegularText>TodayRecovered:<BoldRedText>{printCountry.todayRecovered}{'\n'}</BoldRedText></RegularText>
          </Card>
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}></View>
      <MainButton onPress={getCountries}>GET DATAS</MainButton>
      <MainButton
        onPress={() => setIsSpesific(false)}
        pressedColor={"#652121"}
        onLongPress={() => props.goBackHandler("")}
      >
        BACK
      </MainButton>
      {whichContent}
    </View>
  );
};

export default CountryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.whitee,
  },
  buttonContainer: {
    marginTop: 25,
  },
  cardContainer:{
    alignItems: "center",
    marginTop: 20,
  }
});
