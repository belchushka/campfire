import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const EventCard = ({title, text, downloadable = false, downloadableText="", style, icon, alignment="space-between"}) => {
  return (
    <TouchableOpacity>
      <View style={[styles.container, style]}>
        <Image source={icon} />
        <View style={[styles.textContainer, {justifyContent:alignment}]}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    width:"100%",
    paddingLeft:4

  },
  textContainer:{
    marginLeft:15,
    alignSelf:"stretch",
  },
  title:{
    color:"black",
    fontFamily:"gilroysemib",
    fontSize:16
  },
  text:{
    color:"#ADADAD",
    fontFamily:"gilroyreg",
    fontSize:16,
    marginTop:10
  }
})

export default EventCard;
