import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import ContentView from '../components/content_view/ContentView';
import ContentContainer from '../components/content_container/ContentContainer';
import ProfileTab from '../components/profile_tab/ProfileTab';
import Separator from '../components/separetor/Separator';
import EventCard from '../components/event_card/EventCard';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../store/actions/userActions';
import MoneyIcon from "../assets/icons/Money.png"
import ColocolIcon from "../assets/icons/Colocol.png"
import LestnicaIcon from "../assets/icons/Lestnica.png"

const Profile = ({navigation}) => {
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const logout = async () => {
    await dispatch(logoutUser());
    navigation.navigate("Login")
  };

  return (
    <ContentView style={{backgroundColor: 'white', borderColor: 'red'}}>
      <ContentContainer>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <Text style={styles.name}>
            {user.firstname} {user.lastname}
          </Text>
          <ScrollView style={{marginTop: 21}} horizontal={true}  showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <ProfileTab
              text={user.group + ' отряд'}
              textColor={'white'}
              color={'#EB6D2E'}
            />
            <ProfileTab
              style={{marginLeft: 12}}
              text={user.room + ' комната'}
            />
            <TouchableOpacity onPress={logout}>
              <ProfileTab
                style={{marginLeft: 12}}
                text={'Выйти'}
                textColor={'white'}
                color={'#e74c3c'}
                borderColor={'#e74c3c'}
              />
            </TouchableOpacity>
          </ScrollView>
          <Separator color={'#F6F6F6'} margins={27} />
          <Text style={styles.eventTitle}>Сегодня</Text>
          <EventCard
            icon={MoneyIcon}
            title={'Пополнение счета'}
            style={{marginTop: 18}}
            text={'Мама перевела 1000₽'}
          />
          <EventCard
            icon={LestnicaIcon}
            title={'Расписание'}
            style={{marginTop: 30}}
            text={'Изменение расписания'}
          />
          <EventCard
            icon={ColocolIcon}
            title={'Сбор отряда'}
            style={{marginTop: 30}}
            text={'16 комната, 18:00'}
          />
          <Text style={[styles.eventTitle, {marginTop: 40}]}>Вчера</Text>
          <EventCard
            icon={MoneyIcon}
            title={'Пополнение счета'}
            style={{marginTop: 18}}
            text={'Мама перевела 2100₽'}
          />
          <EventCard
            icon={LestnicaIcon}
            title={'Расписание'}
            style={{marginTop: 30}}
            text={'Изменение расписания'}
          />

          <Text style={[styles.eventTitle, {marginTop: 40}]}>2 дня назад</Text>
          <EventCard
            icon={MoneyIcon}
            title={'Пополнение счета'}
            style={{marginTop: 18}}
            text={'Мама перевела 100₽'}
          />
          <EventCard
            icon={LestnicaIcon}
            title={'Расписание'}
            style={{marginTop: 30}}
            text={'Изменение расписания'}
          />
          <EventCard
            icon={ColocolIcon}
            title={'Сбор отряда'}
            style={{marginTop: 30}}
            text={'20 комната, 18:00'}
          />
          <EventCard
            icon={ColocolIcon}
            title={'Сбор отряда'}
            style={{marginTop: 30, marginBottom: 160}}
            text={'20 комната, 20:30'}
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

export default Profile;
