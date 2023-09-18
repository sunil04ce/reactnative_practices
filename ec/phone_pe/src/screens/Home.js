import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './HomeStyles';
import { commonAppStyles } from './CommonAppStyles';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'
import CommonHeader from './CommonHeader';

const Home = () => {
    return (

        <View style={commonAppStyles.container}>
            <StatusBar barStyle={'light-content'} />
            <CommonHeader />
            <ScrollView style={{ marginBottom: moderateScale(75) }}>
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
                    <View style={styles.transferView}>
                        <TouchableOpacity style={[styles.transferTab]}>
                            <View style={styles.transferCard}>
                                <Image source={require('../images/user.png')} style={commonAppStyles.icons} />
                            </View>
                            <Text style={styles.transferText}>{'To Mobile\nNumber'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.transferTab}>
                            <View style={styles.transferCard}>
                                <Image source={require('../images/bank2.png')} style={commonAppStyles.icons} />
                            </View>
                            <Text style={styles.transferText}>{'To Bank/\nUPI ID'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.transferTab}>
                            <View style={styles.transferCard}>
                                <Image source={require('../images/reload.png')} style={commonAppStyles.icons} />
                            </View>
                            <Text style={styles.transferText}>{'To Self\nAccount'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.transferTab}>
                            <View style={styles.transferCard}>
                                <Image source={require('../images/bank.png')} style={commonAppStyles.icons} />
                            </View>
                            <Text style={styles.transferText}>{'Check\nBalance'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.otherOptions}>
                    <TouchableOpacity style={styles.otherOptionTab}>
                        <Image source={require('../images/wallet.png')} style={commonAppStyles.icons} />
                        <Text style={styles.otherOptionText}>PhonePe Wallet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherOptionTab}>
                        <Image source={require('../images/gift.png')} style={commonAppStyles.icons} />
                        <Text style={styles.otherOptionText}>Rewards</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherOptionTab}>
                        <Image source={require('../images/speaker.png')} style={commonAppStyles.icons} />
                        <Text style={styles.otherOptionText}>{'Refer & Get 100'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rechargeAndBills}>
                    <Text style={styles.heading}>Recharge & Pay Bills</Text>
                    <View style={styles.transferView}>
                        <TouchableOpacity style={styles.transferTab}>
                            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
                                <Image source={require('../images/mobile.png')} style={[commonAppStyles.icons, { tintColor: 'purple', width: scale(30), height: scale(30) }]} />
                            </View>
                            <Text style={styles.transferText}>{'Mobile\nRecharge'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.transferTab}>
                            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
                                <Image source={require('../images/satellite-dish.png')} style={[commonAppStyles.icons, { tintColor: 'purple', width: scale(30), height: scale(30) }]} />
                            </View>
                            <Text style={styles.transferText}>{'DTH'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.transferTab}>
                            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
                                <Image source={require('../images/bulb.png')} style={[commonAppStyles.icons, { tintColor: 'purple', width: scale(30), height: scale(30) }]} />
                            </View>
                            <Text style={styles.transferText}>{'Electricity'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.transferTab}>
                            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
                                <Image source={require('../images/credit-card.png')} style={[commonAppStyles.icons, { tintColor: 'purple', width: scale(30), height: scale(30) }]} />
                            </View>
                            <Text style={styles.transferText}>{'Credit Card\nPayment'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.transferView}>
                        <TouchableOpacity style={styles.transferTab}>
                            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
                                <Image source={require('../images/renewable.png')} style={[commonAppStyles.icons, { tintColor: 'purple', width: scale(30), height: scale(30) }]} />
                            </View>
                            <Text style={styles.transferText}>{'Rent\nPayment'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.transferTab}>
                            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
                                <Image source={require('../images/personal.png')} style={[commonAppStyles.icons, { tintColor: 'purple', width: scale(30), height: scale(30) }]} />
                            </View>
                            <Text style={styles.transferText}>{'Loand\nRepayment'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.transferTab}>
                            <View style={[styles.transferCard, { backgroundColor: 'white' }]}>
                                <Image source={require('../images/gas-tank.png')} style={[commonAppStyles.icons, { tintColor: 'purple', width: scale(30), height: scale(30) }]} />
                            </View>
                            <Text style={styles.transferText}>{'Electricity'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.transferTab}>
                            <View style={[styles.transferCard]}>
                                <Image source={require('../images/next.png')} style={[commonAppStyles.icons]} />
                            </View>
                            <Text style={styles.transferText}>{'See All'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View >
    )
}

export default Home

