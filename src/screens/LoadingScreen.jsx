import React, { useEffect } from "react";
import ContentView from "../components/content_view/ContentView";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setTokenAndUser } from "../store/actions/userActions";

const LoadingScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const token = useSelector(state=>state.user.accessToken)
  const checkData = async () => {
    const authToken = await AsyncStorage.getItem("token")
    const userData = JSON.parse(await AsyncStorage.getItem("userData"))
    if (authToken){
      dispatch(setTokenAndUser(authToken, userData))
        navigation.navigate("Tabs")
    }else{
      navigation.navigate("Login")
    }

    return token
  };
  useEffect(() => {
    checkData()
  }, []);


  return (
    <ContentView style={{justifyContent:"center", alignItems:"center"}}>
      <ActivityIndicator color={"#EB6D2E"} size={"large"}/>
    </ContentView>
  );
};

export default LoadingScreen;
