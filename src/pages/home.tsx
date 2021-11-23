import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Feather, FontAwesome5 } from '@expo/vector-icons'
import PagerView from 'react-native-pager-view'
import colors from '../styles/colors';


import image from '../assets/clip-1676.png';
import taxi from '../assets/taxi.jpg';
import sao from '../assets/sao.jpg';

import {useNavigation} from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

export default function Home() {
    const navigation = useNavigation();
    const Auth = useAuth();

    function abaLogin() {
        Auth.logOut();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Feather onPress={abaLogin} name="arrow-left" color={colors.black} size={32} />

                <View style={styles.headerFooter}>
                    <FontAwesome5 name="heart" style={styles.heartBeat} color={colors.black} size={32} />
                    <View style={styles.borderPhone}>
                        <Feather name="phone-call" color={colors.heading} size={28} />
                    </View>
                </View>
            </View>

            <View style={styles.banner}>
                <PagerView initialPage={0} style={{flex: 1}}> 
                    <View key="1" style={{backgroundColor: 'red', borderRadius: 8}}>
                        <Image source={taxi} resizeMode="cover" style={{width:320, height: 170, borderRadius: 7}}/>
                    </View>

                    <View key="2" style={{backgroundColor: 'red', borderRadius: 8}}>
                        <Image source={sao} resizeMode="cover" style={{width:320, height: 170, borderRadius: 7}}/>
                    </View>
                </PagerView>
            </View>

            <View style={styles.textPrimary}>
                <Text style={styles.textOfert}>Envie uma <Text style={styles.textOferta}>oferta</Text></Text>
            </View>

            <View style={styles.credit}>
                <Text style={styles.textCredit}>Seu crédito {'\n'}aprovado é de {'\n'}<Text style={styles.creditNumber}>$75'000.000</Text></Text>
                <Image source={image} style={styles.creditImage} />
            </View>

            <View style={styles.valueCredit}>
                <FontAwesome5 name="money-bill-alt" color={colors.heading} size={32} />
                <View>
                    <Text style={styles.valueCreditText}>Crédito em conta</Text>
                    <Text style={styles.valueCreditMoney}>$500</Text>
                </View>
                <FontAwesome5 name="money-bill-alt" style={styles.moneyIcon} color={colors.heading} size={32} />
                <View>
                    <Text style={styles.valueCreditTextIcon}>Limite</Text>
                    <Text style={styles.valueCrediMoneyIcon}>$500</Text>
                </View>
            </View>

            <View style={styles.button}>
                <Text style={styles.buttonText}>$500</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 52,
        marginHorizontal: 24,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    banner: {
        flex: 1,
        marginTop: 19,
        marginBottom: -25
    },

    heartBeat: {
        right: 20
    },

    borderPhone: {
        backgroundColor: colors.blue,
        borderRadius: 50,
        padding: 10
    },

    textPrimary: {
        marginTop: 50,
        alignItems: 'center'
    },

    textOfert: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 30
    },

    textOferta: {
        color: colors.heading,
        fontWeight: 'bold'
    },

    textCredit: {
        color: colors.gray,
        fontSize: 20,
        alignItems: 'center',
        fontWeight: 'bold'
    },

    credit: {
        borderColor: colors.heading,
        borderWidth: 1,
        borderRadius: 8,
        padding: 20,
        marginTop: 30,
        flexDirection: 'row'
    },

    creditImage: {
        width: 80,
        height: 80,
        left: 37
    },

    creditNumber: {
        color: colors.heading,
        fontWeight: 'bold'
    },

    valueCredit: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },

    valueCreditText: {
        color: colors.gray,
        fontWeight: 'bold',
        fontSize: 16,
        left: 10
    },

    valueCreditMoney: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 16,
        left: 10
    },

    moneyIcon: {
        left: 50
    },

    valueCreditTextIcon: {
        color: colors.gray,
        fontWeight: 'bold',
        fontSize: 16,
        left: 60
    },

    valueCrediMoneyIcon: {
        color: colors.black,
        fontWeight: 'bold',
        fontSize: 16,
        left: 60
    },

    button: {
        backgroundColor: colors.heading,
        borderRadius: 50,
        padding: 25,
        marginTop: 34,
        marginBottom: 34
    },

    buttonText: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }
})