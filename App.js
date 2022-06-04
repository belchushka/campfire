import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Provider} from 'react-redux';
import NavigationWrapper from './src/components/navigation_wrapper/NavigationWrapper';
import store from './src/store/index';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <View style={{flex: 1}}>
          <NavigationWrapper />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
