import React, { useEffect, useState } from "react";
import { Alert, Dimensions, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import ContentView from "../components/content_view/ContentView";
import CustomHeader from "../components/custom_header/CustomHeader";
import QRCode from "react-native-qrcode-svg";
import AppButton from "../components/app_button/AppButton";
import ContentContainer from "../components/content_container/ContentContainer";
import QuestionMark from "../assets/icons/QuestionMark";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/actions/userActions";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const Transaction = ({navigation}) => {
  const user = useSelector(state=>state.user.user)
  const accessToken = useSelector(state=>state.user.accessToken)
  const socket = useSelector(state=>state.user.socketStream)
  const dispatch = useDispatch()
  const [hash, setHash] = useState("na")

  const fetchUser = async ()=>{
    try {
      const user = await dispatch(getUser())
      //Todo submit subscription

    }catch (e) {
      alert(e)
    }
  }

  useEffect(()=>{
    fetchUser()
    socket.on("subscribe",(data)=>{
      setHash(JSON.stringify({
        transactionHash:data.transaction_hash
      }))
    })

    socket.on("transaction",(data)=>{
      console.log(data);
      if(data.statusCode==200){

      }else{
        Alert.alert(
          "Списание",
          "Подтвердите или отколните транзакцию на сумму: " + data.count,
          [
            // The "Yes" button
            {
              text: "Принять",
              onPress: () => {
                socket.emit("transaction",{
                  confirm:true
                })

                fetchUser()
                socket.emit("subscribe",{
                  access_token:accessToken
                })
              },
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
              text: "Отклонить",
              onPress:()=>{
                socket.emit("transaction",{
                  confirm:false
                })
              }
            },
          ]
        )
      }

    })

    return ()=>{
      socket.removeAllListeners("subscribe")
      socket.removeAllListeners("transaction")
    }
  },[])

  useEffect(()=>{


    const callBack = ()=>{
      socket.emit("subscribe",{
        access_token:accessToken
      })
    }
    // Adding side effect on component mount
    navigation.addListener('focus',callBack );

    // Specify how to clean up after this effect on component-unmount:
    return () => navigation.removeEventListener('focus', callBack)

  },[navigation])
  return (
    <ContentView style={{backgroundColor:"#FCFAFA"}}>
      <CustomHeader title={"Кошелек"}/>
      <ContentContainer>
        <View style={styles.code}>
          <QRCode
            value={hash}
            size={width * 0.6}
            color="black"
            backgroundColor="white"
          />
        </View>
        <Text style={styles.balanceTitle}>
          Баланс:
        </Text>
        <Text style={styles.balance}>
          {user.balance} ₽
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
