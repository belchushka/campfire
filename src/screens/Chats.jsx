import React from "react";
import ContentContainer from "../components/content_container/ContentContainer";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

import EventCard from "../components/event_card/EventCard";
import ContentView from "../components/content_view/ContentView";
import CustomHeader from "../components/custom_header/CustomHeader";
import CampIcon from "../assets/icons/Camp.png"
import SosniIcon from "../assets/icons/Sosni.png"

const Chats = () => {
  return (
    <ContentView style={{backgroundColor: 'white', borderColor: 'red'}}>
      <CustomHeader title={"Чаты"}/>

      <ContentContainer>

        <ScrollView howsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <EventCard
            icon={SosniIcon}
            title={'Родители'}
            alignment={"center"}
            style={{marginTop: 18}}
            text={'Мария: Всем привет'}
          />
          <EventCard
            icon={CampIcon}
            alignment={"center"}
            title={'1 отряд'}
            style={{marginTop: 30, marginBottom: 190}}
            text={'Вожатый: Ребят, у нас сбор'}
          />

        </ScrollView>
      </ContentContainer>
    </ContentView>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 35,
    fontFamily: 'gilroysemib',
    color: 'black',
    marginTop: 30,
  },
  eventTitle: {
    fontSize: 18,
    fontFamily: 'gilroysemib',
    color: 'black',
  },
});


export default Chats;
