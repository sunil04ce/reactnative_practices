import { View, Text, StatusBar, ScrollView, Image, FlatList } from 'react-native'
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
                <View style={styles.searchBox}>
                    <Image source={require('../images/search.png')} style={styles.searchIcon} />
                    <Text style={styles.searchPlaceholder}>Search by store name or phone number</Text>
                </View>
                <FlatList data={[1, 1, 1, 1, 1]} renderItem={({ item, index }) => {
                    return (
                        <View style={styles.shopItem}>

                        </View>
                    )
                }}></FlatList>
            </ScrollView>
        </View>
    )
}

export default Stores