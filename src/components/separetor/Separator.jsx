import React from "react";
import { View } from "react-native";

const Separator = ({margins, color}) => {
  return (
    <View style={{
      width:"100%",
      height:1,
      marginVertical:margins,
      backgroundColor:color
    }}>

    </View>
  );
};

export default Separator;
