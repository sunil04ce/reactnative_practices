import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'

const Home = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'} />
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
                            style={styles.icons} />
                        <Image source={require('../images/bell.png')}
                            style={[styles.icons, { marginLeft: moderateScale(15), marginRight: moderateScale(15) }]} />
                        <Image source={require('../images/help.png')}
                            style={styles.icons} />
                    </View>

                </View>
            </View>
            <View style={styles.updateCard}>
                <View style={styles.updateTopView}>
                    <Image source={require('../images/logo.png')} style={styles.logo} />
                    <View>
                        <Text style={styles.updateTitle}>App Update Available</Text>
                        <Text style={styles.updateMsg}>We fixed some issues and added some cool feaures in this update</Text>
                    </View>
                </View>
                <View style={styles.updateBtnView}>
                    <Text style={styles.later}>LATER</Text>
                    <TouchableOpacity style={styles.update}>
                        <Text style={styles.updateText}>UPDATE</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={require('../images/phone_pay_banner.png')} style={styles.banner} />
            <View style={styles.moneyTransferCard}>
                <Text style={styles.heading}>Money Transfers</Text>
                <View style={[styles.transferView, { paddingLeft: moderateScale(30) }]}>
                    <TouchableOpacity style={[styles.transferTab]}>
                        <View style={styles.transferCard}>
                            <Image source={require('../images/user.png')} style={styles.icons} />
                        </View>
                        <Text style={styles.transferText}>{'To Mobile\nNumber'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transferTab}>
                        <View style={styles.transferCard}>
                            <Image source={require('../images/bank2.png')} style={styles.icons} />
                        </View>
                        <Text style={styles.transferText}>{'To Bank/\nUPI ID'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transferTab}>
                        <View style={styles.transferCard}>
                            <Image source={require('../images/reload.png')} style={styles.icons} />
                        </View>
                        <Text style={styles.transferText}>{'To Self\nAccount'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.transferTab}>
                        <View style={styles.transferCard}>
                            <Image source={require('../images/bank.png')} style={styles.icons} />
                        </View>
                        <Text style={styles.transferText}>{'Check\nBalance'}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View >
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
    },
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
    icons: {
        width: scale(22),
        height: scale(22),
        tintColor: 'white'
    },
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
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: moderateScale(20)
    },
    transferTab: {
        width: '25%',
        justifyContent: 'center',
        alignContent: 'center',
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
        marginTop: moderateScale(5)
    }
})