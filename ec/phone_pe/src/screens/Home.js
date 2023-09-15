import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './HomeStyles';
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
            <ScrollView style={{ marginBottom: moderateScale(70) }}>
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
                <View style={styles.otherOptions}>
                    <TouchableOpacity style={styles.otherOptionTab}>
                        <Image source={require('../images/wallet.png')} style={styles.icons} />
                        <Text style={styles.otherOptionText}>PhonePe Wallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherOptionTab}>
                        <Image source={require('../images/gift.png')} style={styles.icons} />
                        <Text style={styles.otherOptionText}>Gift</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherOptionTab}>
                        <Image source={require('../images/speaker.png')} style={styles.icons} />
                        <Text style={styles.otherOptionText}>{'Refer & Get 100'}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
}

export default Home

