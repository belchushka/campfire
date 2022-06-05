import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Separator from "../separetor/Separator";
import FeedbackSmile from "../feedback_smile/FeedbackSmile";

const FeedbackQuestion = ({id, title, style, onChange}) => {
  const [selectedSmile, setSelectedSmile] = useState(null)
  useEffect(()=>{
    onChange(selectedSmile)
  },[selectedSmile])
  return (
    <View style={style}>
      <Text style={styles.title}>{id}. {title}</Text>
      <View style={{flexDirection:"row", justifyContent:"space-around", marginVertical:25}}>
        <FeedbackSmile id={0} onPress={(id)=>setSelectedSmile(id)} selected={selectedSmile==0} type={"sad"}/>
        <FeedbackSmile id={1} onPress={(id)=>setSelectedSmile(id)} selected={selectedSmile==1} type={"middle"}/>
        <FeedbackSmile id={2} onPress={(id)=>setSelectedSmile(id)} selected={selectedSmile==2} type={"fun"}/>
      </View>
      <Separator margins={10} color={"#F6F6F6"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  title:{
    color:'#EB6D2E',
    fontFamily: 'gilroysemib',
    fontSize:18
  }
})

export default FeedbackQuestion;
