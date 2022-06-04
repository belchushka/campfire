import React from "react";
import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import ContentView from "../components/content_view/ContentView";
import CustomHeader from "../components/custom_header/CustomHeader";
import QRCode from "react-native-qrcode-svg";
import AppButton from "../components/app_button/AppButton";
import ContentContainer from "../components/content_container/ContentContainer";
import QuestionMark from "../assets/icons/QuestionMark";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const Transaction = () => {
  return (
    <ContentView style={{backgroundColor:"#FCFAFA"}}>
      <CustomHeader title={"Кошелек"}/>
      <ContentContainer>
        <View style={styles.code}>
          <QRCode
            value={'NA'}
            size={width * 0.6}
            color="black"
            backgroundColor="white"
          />
        </View>
        <Text style={styles.balanceTitle}>
          Баланс:
        </Text>
        <Text style={styles.balance}>
          600 ₽
        </Text>
        <AppButton text={"Запросить деньги"} style={styles.button} icon={<QuestionMark></QuestionMark>}/>
      </ContentContainer>
    </ContentView>
  );
};

const styles = StyleSheet.create({
  code:{
    alignSelf:"center",
    marginTop: height * .12
  },
  balanceTitle:{
    color:"black",
    fontSize:24,
    alignSelf:"center",
    marginTop: height * .05,
    fontFamily:"gilroysemib"
  },
  balance:{
    marginTop: height * .003,
    color:"#EB6D2E",
    alignSelf:"center",
    fontSize:48,
    fontFamily:"gilroysemib"

  },

  button:{
    marginTop: height * .08
  }
})

export default Transaction;
