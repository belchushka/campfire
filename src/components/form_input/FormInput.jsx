import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

const FormInput = ({title=null, placeholder=null, style, value,onChangeText}) => {
  return (
    <View style={[styles.inputContainer,style]}>
      {title && <Text style={styles.inputTitle}>{title}</Text>}
      <TextInput value={value} onChangeText={(val)=>onChangeText(val)} style={styles.input} placeholder={placeholder} placeholderTextColor={"#c2c2c2"} selectionColor={'#EB6D2E'}/>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer:{
    width:"100%",
  },
  inputTitle:{
    fontSize:18,
    fontFamily:"gilroysemib",
    color:"white"
  },
  input:{
    backgroundColor:"rgba(255,255,255,0.25)",
    borderRadius:5,
    marginTop:8,
    paddingHorizontal:10,
    height:55
  }
})

export default FormInput;
