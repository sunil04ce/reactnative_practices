import { StyleSheet } from 'react-native'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'

const styles = StyleSheet.create({
    updateCard: {
        width: '94%',
        borderRadius: moderateScale(5),
        alignSelf: 'center',
        marginTop: moderateVerticalScale(10),
        backgroundColor: 'white',
        // shadowRadius: 10,
        // shadowColor: 'rgba(0,0,0,0.5)',
        // shadowOffset: { x: 0, y: 1 }
    },
    updateTopView: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(15),
        marginTop: moderateVerticalScale(20)
    },
    logo: {
        width: scale(30),
        height: scale(30)
    },
    updateTitle: {
        fontSize: moderateScale(18),
        fontWeight: '600',
        marginLeft: moderateScale(10)
    },
    updateMsg: {
        fontSize: moderateScale(14),
        width: '70%',
        marginLeft: moderateScale(10),
        color: '#6e6e6e'
    },
    updateBtnView: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginTop: moderateVerticalScale(20),
        marginBottom: moderateVerticalScale(15),
        alignItems: 'center',
        marginRight: moderateScale(20)
    },
    later: {
        color: 'purple',
        fontWeight: '600',
        fontSize: moderateScale(16)
    },
    update: {
        backgroundColor: 'purple',
        paddingBottom: moderateScale(10),
        paddingTop: moderateScale(10),
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
        borderRadius: moderateScale(20),
        marginLeft: moderateScale(20),
    },
    updateText: {
        color: 'white',
        fontWeight: '600',
        fontSize: moderateScale(16)
    },
    banner: {
        width: '94%',
        height: verticalScale(100),
        alignSelf: 'center',
        marginTop: moderateVerticalScale(20),
        borderRadius: moderateScale(10)
    },
    moneyTransferCard: {
        width: '94%',
        height: verticalScale(150),
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: moderateVerticalScale(10),
        borderRadius: moderateScale(10)
    },
    heading: {
        fontSize: moderateScale(16),
        fontWeight: '600',
        marginLeft: moderateScale(15),
        marginTop: moderateVerticalScale(15)
    },
    transferView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: moderateScale(20)
    },
    transferTab: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    transferCard: {
        width: scale(36),
        height: scale(36),
        borderRadius: moderateScale(10),
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
    },
    transferText: {
        marginTop: moderateScale(5),
        textAlign: 'center'
    },
    otherOptions: {
        flexDirection: 'row',
        width: '94%',
        marginTop: moderateScale(15),
        marginBottom: moderateScale(5),
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
    },
    otherOptionTab: {
        width: '31%',
        height: verticalScale(80),
        backgroundColor: '#277be8',
        borderRadius: moderateScale(18),
        justifyContent: 'center',
        alignItems: 'center'
    },
    otherOptionText: {
        color: 'white',
        fontWeight: '600',
        marginTop: moderateScale(10),
    },
    rechargeAndBills: {
        backgroundColor: 'white',
        borderRadius: moderateScale(5),
        marginTop: moderateVerticalScale(10),
        alignSelf: 'center',
        height: verticalScale(270),
        width: '94%'
    }
});

export { styles };