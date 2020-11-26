import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import ListItem from "../Components/ListItem";
import MainButton from "../Components/MainButton";
import { BoldRedText, BoldText, RegularText } from "../Components/MainText";
import Colors from "../assets/Colors/color";
import Card from "../Components/Card";

const ContinentScreen = (props) => {
  const [fetchData, setFetchData] = useState([]);
  const [spesificFetchData, setSpesificFetchData] = useState();
  const [isSpesific, setIsSpesific] = useState(false);
  const getContinents = async () => {
    let url = `https://disease.sh/v3/covid-19/continents?yesterday=false&twoDaysAgo=false&sort=cases&allowNull=false`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      setFetchData(data);
      setIsSpesific(false);
    } catch (error) {
      // alert error
    }
  };
  const getSpesificContinent = async (chosenContinent) => {
    if (chosenContinent == "Australia/Oceania") {
      chosenContinent = "Australia";
    }
    try {
      let spesificUrl = `https://disease.sh/v3/covid-19/continents/${chosenContinent}?yesterday=false&twoDaysAgo=false&strict=false&allowNull=false `;
      let response = await fetch(spesificUrl);
      let data = await response.json();
      setSpesificFetchData(data);
      setIsSpesific(true);
    } catch (error) {
      //alert error
    }
  };

  let whichContent;
  if (isSpesific) {
    whichContent = (
      <ScrollView>
      <View style={styles.cardContainer}>
        <Card>
    <BoldText style={{fontSize:25,color:Colors.goodRed}} >{spesificFetchData.continent}{'\n'}</BoldText>
    <RegularText>Population:<BoldRedText>{spesificFetchData.population}{'\n'}</BoldRedText></RegularText>
    <RegularText>Active:<BoldRedText>{spesificFetchData.active}{'\n'}</BoldRedText></RegularText>
    <RegularText>ActivePerOneMillion:<BoldRedText>{spesificFetchData.activePerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>Cases:<BoldRedText>{spesificFetchData.cases}{'\n'}</BoldRedText></RegularText>
    <RegularText>CasesPerOneMillion:<BoldRedText>{spesificFetchData.casesPerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>Critical:<BoldRedText>{spesificFetchData.critical}{'\n'}</BoldRedText></RegularText>
    <RegularText>CriticalPerOneMillion:<BoldRedText>{spesificFetchData.criticalPerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>Deaths:<BoldRedText>{spesificFetchData.deaths}{'\n'}</BoldRedText></RegularText>
    <RegularText>DeathsPerOneMillion:<BoldRedText>{spesificFetchData.deathsPerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>Recovered:<BoldRedText>{spesificFetchData.recovered}{'\n'}</BoldRedText></RegularText>
    <RegularText>RecoveredPerOneMillion:<BoldRedText>{spesificFetchData.recoveredPerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>Tests:<BoldRedText>{spesificFetchData.tests}{'\n'}</BoldRedText></RegularText>
    <RegularText>TestsPerOneMillion:<BoldRedText>{spesificFetchData.testsPerOneMillion}{'\n'}</BoldRedText></RegularText>
    <RegularText>TodayCases:<BoldRedText>{spesificFetchData.todayCases}{'\n'}</BoldRedText></RegularText>
    <RegularText>TodayDeaths:<BoldRedText>{spesificFetchData.todayDeaths}{'\n'}</BoldRedText></RegularText>
    <RegularText>TodayRecovered:<BoldRedText>{spesificFetchData.todayRecovered}</BoldRedText></RegularText>

          
        </Card>
      </View>
      </ScrollView>
    );

  } else {
    whichContent = (
      <FlatList
        keyExtractor={(item) => item.continent}
        data={fetchData}
        renderItem={(itemdata) => (
          <ListItem
            onPress={() => getSpesificContinent(itemdata.item.continent)}
          >
            {itemdata.item.continent}
          </ListItem>
        )}
      >
        {" "}
      </FlatList>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: Colors.whitee }}>
      <View style={{ marginTop: 25 }}>
        <MainButton onPress={getContinents}>GET DATAS</MainButton>
        <MainButton
          onLongPress={() => props.goBackHandler("")}
          onPress={() => setIsSpesific(false)}
          pressedColor={"#652121"}
        >
          BACK
        </MainButton>
      </View>

      {whichContent}
    </View>
  );
};

export default ContinentScreen;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: "center",
    marginTop: 20,
    
  },
});
