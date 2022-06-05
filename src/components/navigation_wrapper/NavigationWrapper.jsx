import React, {useEffect} from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Easing, StatusBar, Text, View } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../../screens/Login';
import Transaction from '../../screens/Transaction';
import TransactionIcon from '../../assets/icons/Transaction';
import ScheduleIcon from '../../assets/icons/Schedule';
import ProfileIcon from '../../assets/icons/Profile';
import ChatIcon from '../../assets/icons/Chat';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../../screens/Profile";
import { setTokenAndUser } from "../../store/actions/userActions";
import LoadingScreen from "../../screens/LoadingScreen";
import Schedule from "../../screens/Schedule"
import Chats from "../../screens/Chats";
import Feedback from "../../screens/Feedback";

const config = {
  animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator()

const Tabs = ()=>{
  return (
    <Tab.Navigator
      initialRouteName={"Profile"}
      screenOptions={{
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle:{
          position:"absolute",
          bottom:35,
          left:10,
          right:10,
          borderRadius:30,
          height:60,
          elevation:1,
          paddingHorizontal:20
        }
      }}

    >
      <Tab.Screen
        name={"Schedule"}
        component={Schedule}
        icon
        options={{
          tabBarIcon:({focused})=>{
            if (focused){
              return <ScheduleIcon fill={"#EB6D2E"}/>
            }
            return <ScheduleIcon/>

          }
        }}
      />

      <Tab.Screen
        name={"Messages"}
        component={Chats}
        icon
        options={{
          tabBarIcon:({focused})=>{
            if (focused){
              return <ChatIcon fill={"#EB6D2E"}/>
            }
            return <ChatIcon/>

          }
        }}
      />
      <Tab.Screen
        name={"Transaction"}
        component={Transaction}
        icon
        options={{
          tabBarIcon:({focused})=>{
            if (focused){
              return <TransactionIcon fill={"#EB6D2E"}/>
            }
            return <TransactionIcon/>

          }
        }}
      />
      <Tab.Screen
        name={"Profile"}
        component={Profile}
        icon
        options={{
          tabBarIcon:({focused})=>{
            if (focused){
              return <ProfileIcon fill={"#EB6D2E"}/>
            }
            return <ProfileIcon/>

          }
        }}
      />
    </Tab.Navigator>
  )
}


const NavigationWrapper = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Loading"}
        screenOptions={{

          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown:false
        }}>
        <Stack.Screen name={'Loading'}  component={LoadingScreen} />
        <Stack.Screen name={'Login'}  component={Login} />
        <Stack.Screen name={'Tabs'} component={Tabs}/>
        <Stack.Screen name={'Feedback'} component={Feedback}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationWrapper;
