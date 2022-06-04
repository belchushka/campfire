import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

const CustomHeader = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    width:"95%",
    backgroundColor:"#EB6D2E",
    height:55,
    justifyContent:"center",
    alignItems:"center",
    borderTopRightRadius:25,
    borderBottomRightRadius:25,
    marginTop:15
  },

  headerText:{
    color:"white",
    fontSize:20,
    fontFamily:"gilroysemib",
    transform:[
      {
        translateX: Dimensions.get("window").width*0.05,
      }
    ]
  }
})

export default CustomHeader;
