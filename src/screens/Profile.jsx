import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import ContentView from "../components/content_view/ContentView";
import ContentContainer from "../components/content_container/ContentContainer";
import ProfileTab from "../components/profile_tab/ProfileTab";
import Separator from "../components/separetor/Separator";
import EventCard from "../components/event_card/EventCard";
import { useAlert } from "../hooks/useAlert";

const Profile = () => {
  return (
    <ContentView style={{backgroundColor:"white"}}>
      <ContentContainer>
        <ScrollView>
          <Text style={styles.name}>Никита Иванов</Text>
          <ScrollView style={{marginTop:21}} horizontal={true}>
            <ProfileTab text={"1 отряд"} orange={true}/>
            <ProfileTab style={{marginLeft:12}} text={"17 комната"}/>
          </ScrollView>
          <Separator color={"#F6F6F6"} margins={27}/>
          <Text style={styles.eventTitle}>Сегодня</Text>
          <EventCard title={"Пополнение счета"} style={{marginTop: 18}} text={"Мама перевела 200₽"}/>
          <EventCard title={"Расписание"} style={{marginTop: 30}} text={"Изменение расписания"}/>
          <EventCard title={"Сбор отряда"} style={{marginTop: 30}} text={"16 комната, 18:00"}/>
          <Text style={[styles.eventTitle, {marginTop:40}]}>Вчера</Text>
          <EventCard title={"Пополнение счета"} style={{marginTop: 18}} text={"Мама перевела 200₽"}/>
          <EventCard title={"Расписание"} style={{marginTop: 30}} text={"Изменение расписания"}/>
          <EventCard title={"Сбор отряда"} style={{marginTop: 30}} text={"16 комната, 18:00"}/>
          <Text style={[styles.eventTitle, {marginTop:40}]}>2 дня назад</Text>
          <EventCard title={"Пополнение счета"} style={{marginTop: 18}} text={"Мама перевела 200₽"}/>
          <EventCard title={"Расписание"} style={{marginTop: 30}} text={"Изменение расписания"}/>
          <EventCard title={"Сбор отряда"} style={{marginTop: 30, marginBottom:160}} text={"16 комната, 18:00"}/>
        </ScrollView>
      </ContentContainer>
    </ContentView>
  );
};

const styles = StyleSheet.create({
  name:{
    fontSize:35,
    fontFamily:"gilroysemib",
    color:"black",
    marginTop: 30
  },
  eventTitle:{
    fontSize:18,
    fontFamily:"gilroysemib",
    color:"black",
  }
})

export default Profile;
