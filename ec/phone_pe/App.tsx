import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import Home from './src/screens/Home';
import Stores from './src/screens/Stores';
import Insurance from './src/screens/Insurance';
import Wealth from './src/screens/Wealth';
import History from './src/screens/History';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectedTab === 0 ? (
        <Home />
      ) : selectedTab === 1 ? (
        <Stores />
      ) : selectedTab === 2 ? (
        <Insurance />
      ) : selectedTab === 3 ? (
        <Wealth />
      ) : (
        <History />
      )}
      <View style={styles.bottomNav}>
        <View style={styles.bottomNav2}>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(0);
            }}>
            <View
              style={[
                styles.tabIconBg,
                {backgroundColor: selectedTab === 0 ? 'purple' : '#bdbdbd'},
              ]}>
              <Image
                source={require('./src/images/smart.png')}
                style={styles.tabIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(1);
            }}>
            <View
              style={[
                styles.tabIconBg,
                {backgroundColor: selectedTab === 1 ? 'purple' : '#bdbdbd'},
              ]}>
              <Image
                source={require('./src/images/store.png')}
                style={styles.tabIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <View
              style={[
                styles.tabIconBg,
                {backgroundColor: selectedTab === 2 ? 'purple' : '#bdbdbd'},
              ]}>
              <Image
                source={require('./src/images/insurance.png')}
                style={styles.tabIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(3);
            }}>
            <View
              style={[
                styles.tabIconBg,
                {backgroundColor: selectedTab === 3 ? 'purple' : '#bdbdbd'},
              ]}>
              <Image
                source={require('./src/images/rupee.png')}
                style={styles.tabIcon}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(4);
            }}>
            <View
              style={[
                styles.tabIconBg,
                {backgroundColor: selectedTab === 4 ? 'purple' : '#bdbdbd'},
              ]}>
              <Image
                source={require('./src/images/transaction.png')}
                style={styles.tabIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomNav: {
    width: '100%',
    height: verticalScale(70),
    backgroundColor: '#f2f2f2',
    position: 'absolute',
    bottom: 0,
  },
  bottomNav2: {
    width: '100%',
    height: verticalScale(55),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: scale(18),
    height: scale(18),
    tintColor: 'white',
  },
  tabIconBg: {
    width: scale(34),
    height: scale(34),
    borderRadius: scale(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
