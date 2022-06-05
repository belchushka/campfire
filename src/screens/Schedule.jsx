import React from "react";
import ContentContainer from "../components/content_container/ContentContainer";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import ProfileTab from "../components/profile_tab/ProfileTab";
import Separator from "../components/separetor/Separator";
import EventCard from "../components/event_card/EventCard";
import ContentView from "../components/content_view/ContentView";
import CustomHeader from "../components/custom_header/CustomHeader";
import Circle from "../assets/icons/OrangeDot.png"

const Schedule = () => {
  return (
    <ContentView style={{backgroundColor: 'white', borderColor: 'red'}}>
      <CustomHeader title={"Расписание"}/>

      <ContentContainer>

        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <EventCard
            title={'Подъем'}
            style={{marginTop: 18}}
            text={'8:00'}
            icon={Circle}
          />
          <EventCard
            title={'Зарядка'}
            style={{marginTop: 30}}
            text={'8:40'}
            icon={Circle}
          />
          <EventCard
            title={'Сбор отряда'}
            style={{marginTop: 30}}
            text={'9:00'}
            icon={Circle}
          />
          <EventCard
            title={'Завтрак'}
            style={{marginTop: 18}}
            text={'9:30'}
            icon={Circle}
          />
          <EventCard
            title={'Английский язык'}
            style={{marginTop: 30}}
            text={'10:00'}
            icon={Circle}
          />
          <EventCard
            title={'Спортивые игры'}
            style={{marginTop: 30}}
            text={'12:00'}
            icon={Circle}
          />
          <EventCard
            title={'Медицинские процедуры'}
            style={{marginTop: 18}}
            text={'13:00'}
            icon={Circle}
          />
          <EventCard
            title={'Обед'}
            style={{marginTop: 30}}
            text={'14:00'}
            icon={Circle}
          />
          <EventCard
            title={'Тихий час'}
            style={{marginTop: 30}}
            text={'14:40'}
            icon={Circle}
          />
          <EventCard
            title={'Бассеин'}
            style={{marginTop: 30}}
            text={'16:00'}
            icon={Circle}
          />
          <EventCard
            title={'Полдник'}
            style={{marginTop: 30}}
            text={'17:00'}
            icon={Circle}
          />
          <EventCard
            title={'Настольные игры'}
            style={{marginTop: 30}}
            text={'18:00'}
            icon={Circle}
          />
          <EventCard
            title={'Ужин'}
            style={{marginTop: 30}}
            text={'19:00'}
            icon={Circle}
          />
          <EventCard
            title={'Сбор отряда'}
            icon={Circle}
            style={{marginTop: 30, marginBottom: 190}}
            text={'20:00'}
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


export default Schedule;
