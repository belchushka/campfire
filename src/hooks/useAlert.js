import {useCallback, useState} from 'react';
import {Modal, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const useAlert = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const alert = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 2000);
  };

  const render = useCallback(() => {
    if (modalVisible) {
      return (
        <View style={styles.alertContainer}>
          <View style={styles.alertBody}></View>
        </View>
      );
    }
    return null;
  }, [modalVisible]);

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
    top: StatusBar.currentHeight + 10,
    paddingHorizontal: 20,
  },

  alertBody: {
    width: '100%',
    minHeight: 70,
    backgroundColor: 'white',
    borderRadius: 8,
  },
});
