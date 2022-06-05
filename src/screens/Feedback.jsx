import React, { useState } from "react";
import { Alert, ScrollView, TextInput } from "react-native";
import ContentView from "../components/content_view/ContentView";
import ContentContainer from "../components/content_container/ContentContainer";
import CustomHeader from "../components/custom_header/CustomHeader";
import FeedbackQuestion from "../components/feedback_question/FeedbackQuestion";
import AppButton from "../components/app_button/AppButton";

const Feedback = ({navigation}) => {
  const [rates, setRates] = useState([])

  const sendData = ()=>{
   if (rates.length==3 && rates.every(el=>typeof el == "number")){
     Alert.alert("","Спасибо за обратную часть")

     navigation.navigate("Profile")
   }else {
     Alert.alert("Ошибка","Заполните все поля!")
   }
  }
  return (
    <ContentView style={{backgroundColor: 'white', borderColor: 'red'}}>
      <CustomHeader title={"Обратная связь"} navigation={navigation} hasBackButton={true}/>
      <ContentContainer>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <FeedbackQuestion id={0} style={{marginTop:30}} title={"Как ты сегодня покушал?"} onChange={(rate)=>{
            const arr = rates
            arr[0] = rate
            setRates(arr)
            console.log(rates);
          }}/>
          <FeedbackQuestion id={1} title={"Как ты сегодня покушал?"} onChange={(rate)=>{
            const arr = rates
            arr[1] = rate
            setRates(arr)
            console.log(rates);
          }}/>
          <FeedbackQuestion id={2} title={"Как ты сегодня покушал?"} onChange={(rate)=>{
            const arr = rates
            arr[2] = rate
            setRates(arr)
            console.log(rates);
          }}/>

          <TextInput placeholder={"Напиши подробнее..."} style={{
            backgroundColor:"#DBDDE1",
            borderRadius:10,
            paddingVertical:18,
            paddingHorizontal:10,
            color:"black",
            marginTop:10
          }} multiline={true} numberOfLines={4} textAlignVertical={"top"} placeholderTextColor={"black"} selectionColor={"#EB6D2E"}/>

          <AppButton text={"Отправить"} onPress={sendData} style={{marginTop:20}}/>
        </ScrollView>
      </ContentContainer>
    </ContentView>
  );
};

export default Feedback;
