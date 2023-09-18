import { View, Text, Image } from 'react-native';
import React from 'react';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import { styles } from './CommonHeaderStyles';
import { commonAppStyles } from './CommonAppStyles';

const CommonHeader = () => {
    return (
        <View style={styles.header}>
            <View style={styles.header2}>
                <View style={styles.headerLeftView}>
                    <View>
                        <Image source={require('../images/man.png')} style={styles.user}></Image>
                    </View>
                    <View>
                        <Image source={require('../images/flag.png')} style={styles.flag}></Image>
                    </View>
                    <View style={{ marginLeft: moderateScale(10) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.home}>Home</Text>
                            <Image source={require('../images/down.png')} style={styles.dropdown}></Image>
                        </View>
                        <Text style={styles.address}>201, Antiliya, Mumbai</Text>
                    </View>
                </View>

                <View style={styles.headerRightView}>
                    <Image source={require('../images/qr-code.png')}
                        style={commonAppStyles.icons} />
                    <Image source={require('../images/bell.png')}
                        style={[commonAppStyles.icons, { marginLeft: moderateScale(15), marginRight: moderateScale(15) }]} />
                    <Image source={require('../images/help.png')}
                        style={commonAppStyles.icons} />
                </View>

            </View>
        </View>
    )
}

export default CommonHeader