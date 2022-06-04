import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Bell from "../../assets/icons/Bell";

const EventCard = ({title, text, downloadable = false, downloadableText="", style}) => {
  return (
    <View style={[styles.container, style]}>
      <Bell/>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    width:"100%",

  },
  textContainer:{
    marginLeft:20,
    alignSelf:"stretch",
    justifyContent:"space-between"
  },
  title:{
    color:"black",
    fontFamily:"gilroysemib",
    fontSize:16
  },
  text:{
    color:"#ADADAD",
    fontFamily:"gilroyreg",
    fontSize:16
  }
})

export default EventCard;
