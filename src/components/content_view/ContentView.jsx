import React from 'react';
import { KeyboardAvoidingView, StatusBar, StyleSheet, View } from "react-native";

const ContentView = ({children, style, safe=false}) => {
  return (
    <View style={[styles.container, style, safe && {paddingTop: StatusBar.currentHeight}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  }
})

export default ContentView;
