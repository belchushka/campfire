import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const AppButton = ({style, text, icon=null, onPress}) => {
  return (
    <TouchableOpacity style={[styles.button,style]} onPress={onPress}>
      {icon && icon}
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button:{
    width:"100%",
    height:55,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#EB6D2E",
    borderRadius:8,
    flexDirection:"row"
  },
  buttonText:{
    color:"white",
    fontSize:22,
    fontFamily:"gilroysemib",
    marginLeft:16
  }
})

export default AppButton;
