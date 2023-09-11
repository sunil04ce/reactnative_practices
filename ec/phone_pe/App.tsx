import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bottomNav}>
        <View style={styles.bottomNav2}>
          <TouchableOpacity style={styles.bottomTab}>
            <View style={[styles.tabIconBg, {backgroundColor: '#9e9e9e'}]}>
              <Image
                source={require('./src/images/smart.png')}
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
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: scale(24),
    height: scale(24),
  },
  tabIconBg: {
    width: scale(34),
    height: scale(34),
    borderRadius: scale(17),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
