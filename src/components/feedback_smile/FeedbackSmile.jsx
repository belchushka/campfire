import React from "react";
import { Image, TouchableOpacity } from "react-native";
import Sad from "../../assets/icons/SadSmile.png"
import Middle from "../../assets/icons/MiddleSmile.png"
import Fun from "../../assets/icons/FunSmile.png"
import { Grayscale } from 'react-native-color-matrix-image-filters';


const FeedbackSmile = ({type, selected=false, onPress, id}) => {
  const getSmile = (type)=>{
    switch(type){
      case "sad":
        return Sad
      case "middle":
        return Middle
      case "fun":
        return Fun
    }
  }
  return (
    <TouchableOpacity onPress={()=>{
      onPress(id)
    }}>
      {selected ?         <Image source={getSmile(type)}/> :  <Grayscale>
        <Image source={getSmile(type)}/>

      </Grayscale>
      }

    </TouchableOpacity>
  );
};

export default FeedbackSmile;
