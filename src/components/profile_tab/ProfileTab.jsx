import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileTab = ({text, color="white", style, textColor="#EB6D2E", borderColor="#EB6D2E"}) => {
  return (
    <View style={[styles.body, {backgroundColor:color, borderColor: borderColor}, style]}>
      <Text style={[styles.text, {color:textColor}]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body:{
    paddingVertical:10,
    paddingHorizontal:30,
    borderRadius:30,
    borderWidth:2,
    borderColor:"#EB6D2E"
  },
  text:{
    fontFamily:"gilroysemib",
    fontSize:18,
    color:"#EB6D2E"
  }
})

export default ProfileTab;
