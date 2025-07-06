import {View, Text} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import {AppColors} from '../styles/appColors';
import fontFamilyStyles from '../styles/fontFamilyStyles';

const HeaderBar = () => {
  return (
    <View
      style={tw`flex-row bg-[${AppColors.primary}] p-4 h-[60px] items-center`}>
      <Text
        numberOfLines={1}
        style={[
          tw`flex-1 text-white text-base mr-1`,
          fontFamilyStyles.rh_extrabold_800,
        ]}>
        Welcome to Math Learning!
      </Text>
    </View>
  );
};

export default HeaderBar;
