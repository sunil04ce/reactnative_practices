import React from 'react';
import {Text, View} from 'react-native';
import tw from 'twrnc';

function App(): React.JSX.Element {
  return (
    <View style={tw`flex-1 items-center bg-white text-white`}>
      <Text style={tw`text-black`}>Welcome To Math Learning!</Text>
    </View>
  );
}

export default App;
