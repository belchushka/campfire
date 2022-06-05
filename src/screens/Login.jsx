import React, {useState} from 'react';
import ContentView from '../components/content_view/ContentView';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LoginBg from '../assets/images/LoginBackgroundImage.png';
import Centered from '../components/centered/Centered';
import FormInput from '../components/form_input/FormInput';
import AppButton from '../components/app_button/AppButton';
import { useDispatch } from "react-redux";
import { authUser } from "../store/actions/userActions";
import { useAlert } from "../hooks/useAlert";

const Login = ({navigation}) => {
  const alert = useAlert()
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const auth = async () => {
    try{
      await dispatch(authUser({
        email:login,
        password:password
      }))
      navigation.navigate("Tabs")
    }catch (e) {
      alert.alert("Неверный логин или пароль")
    }

  };
  return (
    <ContentView>
      {/*<StatusBar*/}
      {/*  translucent={true}*/}
      {/*  backgroundColor={'transparent'}*/}
      {/*  barStyle="light-content"*/}
      {/*/>*/}

      <ImageBackground
        source={LoginBg}
        resizeMode="cover"
        style={{flex: 1}}
        blurRadius={5}>

        <Centered style={styles.formContainer}>
          {alert.render()}

          <View style={styles.form}>
            <FormInput
              value={login}
              onChangeText={val => setLogin(val)}
              title={'Логин'}
            />
            <FormInput
              value={password}
              onChangeText={val => setPassword(val)}
              title={'Пароль'}
              style={{marginTop: 20}}
            />
            <AppButton onPress={auth} style={styles.button} text={'Войти'} />
            <Text style={styles.supportText}>
              Я не знаю или не помню пароль
            </Text>
          </View>
        </Centered>
      </ImageBackground>


    </ContentView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  form: {
    width: '100%',
    paddingHorizontal: 26,
  },
  button: {
    marginTop: Dimensions.get('window').height * 0.3,
  },
  supportText: {
    color: 'white',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 15,
    fontFamily: 'gilroysemib',
  },
});

export default Login;
