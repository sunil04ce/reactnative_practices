/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import HeaderBar from './src/components/HeaderBar';
import Calculation from './src/screens/Calculation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0084F0' }}>
        <HeaderBar />
        <Calculation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
