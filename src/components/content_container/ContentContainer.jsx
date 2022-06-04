import React from "react";
import { View } from "react-native";

const ContentContainer = ({children}) => {
  return (
    <View style={{paddingHorizontal:16}}>
      {children}
    </View>
  );
};

export default ContentContainer;
