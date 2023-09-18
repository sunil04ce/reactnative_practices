import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: verticalScale(80),
        backgroundColor: 'purple',
        justifyContent: 'flex-end'
    },
    header2: {
        width: '100%',
        height: verticalScale(50),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(10)
    },
    headerLeftView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    user: {
        width: scale(40),
        height: scale(40),
    },
    flag: {
        width: scale(20),
        height: scale(20),
        position: 'absolute',
        right: -moderateScale(3),
        // bottom: moderateScale(0),
        borderRadius: scale(10),
        borderWidth: 1,
        borderColor: 'white',
    },
    home: {
        fontSize: moderateScale(18),
        color: 'white',
        fontWeight: '600'
    },
    dropdown: {
        width: scale(16),
        height: scale(16),
        tintColor: 'white',
        marginLeft: moderateScale(5)
    },
    address: {
        color: 'white',
        fontSize: moderateScale(12),
        margin: moderateVerticalScale(2)
    },
    headerRightView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
});

export { styles };