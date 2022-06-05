import {useCallback, useState} from 'react';
import {Dimensions, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const useAlert = () => {
  const top = useSharedValue(-Dimensions.get('window').height / 2);
  const dropDownStyle = useAnimatedStyle(() => {
    return {
      top: withSpring(top.value, {duration: 600, damping: 15}),
    };
  }, []);

  const open = () => {
    top.value = StatusBar.currentHeight + 10;
  };

  const close = () => {
    top.value = -Dimensions.get('window').height;
  };

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const alert = text => {
    setText(text);
    setModalVisible(true);
    open();
    setTimeout(() => {
      close();
    }, 2500);
  };

  const render = useCallback(() => {
    if (modalVisible) {
      return (
        <Animated.View style={[styles.alertContainer, dropDownStyle]}>
          <View style={styles.alertBody}>
            <Text style={styles.text}>{text}</Text>
          </View>
        </Animated.View>
      );
    }
    return null;
  }, [modalVisible, text]);

  return {
    alert,
    render,
  };
};

const styles = StyleSheet.create({
  alertContainer: {
    height: 60,
    width: '100%',
    position: 'absolute',
    zIndex:1000,
    paddingHorizontal: 20,
  },

  alertBody: {
    width: '100%',
    minHeight: 70,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  text: {
    fontFamily: 'gilroysemib',
    color: 'black',
    fontSize: 16,
  },
});
