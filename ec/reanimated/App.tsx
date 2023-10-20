import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
// import Animated from 'react-native-reanimated';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 100, width: 100, backgroundColor: 'red'}}></View>
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 200,
        }}>
        <Text style={{color: 'white'}}>Scale View</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
