import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ArrowRight from "../../assets/icons/ArrowRight";

const FeedbackButton = ({style, navigation}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={()=>navigation.navigate("Feedback")}>
      <View style={styles.body}>
        <View>
          <Text style={styles.title}>Как прошёл твой день?</Text>
          <Text style={styles.text}>Сделаем лагерь лучше вместе</Text>
        </View>
        <ArrowRight/>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    width:"100%",

  },

  body:{
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:"#EB6D2E",
    borderRadius:10,
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems:"center"
  },

  title:{
    color:"white",
    fontSize:20,
    fontFamily:"gilroysemib"
  },

  text:{
    fontSize:12,
    fontFamily:"gilroyreg"
  }
})

export default FeedbackButton;
