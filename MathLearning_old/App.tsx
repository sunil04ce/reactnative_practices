import React from 'react';
import {View} from 'react-native';
import HeaderBar from './src/components/HeaderBar';
import Calculation from './src/screens/Calculation';

function App(): React.JSX.Element {
  return (
    <View>
      <HeaderBar />
      <Calculation />
    </View>
  );
}

export default App;
