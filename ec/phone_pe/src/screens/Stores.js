import { View, Text, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import CommonHeader from './CommonHeader'
import { styles } from './StoreStyles';
import { commonAppStyles } from './CommonAppStyles';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'

const Stores = () => {
    return (
        <View style={commonAppStyles.container}>
            <StatusBar barStyle={'light-content'} />
            <CommonHeader />
            <ScrollView style={{ marginBottom: moderateScale(75) }}>

            </ScrollView>
        </View>
    )
}

export default Stores