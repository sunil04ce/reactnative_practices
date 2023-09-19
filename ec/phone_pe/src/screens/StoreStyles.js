import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'

const styles = StyleSheet.create({
    searchBox: {
        width: '94%',
        height: verticalScale(45),
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: moderateVerticalScale(10),
        borderRadius: moderateScale(30),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(15),
    },
    searchIcon: {
        width: scale(18),
        height: scale(18)
    },
    searchPlaceholder: {
        color: '#9e9e9e',
        marginLeft: moderateScale(15),
        fontSize: moderateScale(15),
    },
    shopItem:
    {
        width: '94%',
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: moderateVerticalScale(20)
    }
});

export { styles };