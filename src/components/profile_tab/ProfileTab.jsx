import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileTab = ({text, orange=false, style}) => {
  return (
    <View style={[styles.body, orange && {backgroundColor:"#EB6D2E"}, style]}>
      <Text style={[styles.text, orange && {color:"white"}]}>
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
