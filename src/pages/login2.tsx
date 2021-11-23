import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView, Platform, ActivityIndicator, Alert } from 'react-native';
import colors from '../styles/colors';
import image from '../assets/image.png'

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import {useAuth} from '../hooks/auth'

export default function Login() {

    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);
    const [loading, setLoading] = useState(false);

    const logar = useAuth();

     function abaHome() {
        setLoading(true)
        logar.Login({email,password});
    }
    return (
        <View style={styles.container}>

            <View style={styles.imageLogin}>
                <Image source={image} style={styles.image} resizeMode="cover" />
            </View>

            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

                <View style={styles.content}>
                    <View style={styles.formLogin}>

                        <View>
                            <Text style={styles.textLogin}>Login</Text>
                        </View>

                        <View style={styles.controllerInput}>
                            <TextInput onChangeText={(email) => setEmail(email)} style={styles.input} placeholder="Informe seu E-mail" />
                        </View>

                        <View style={styles.controllerInput}>
                            <TextInput onChangeText={(password) => setPassword(password)} style={styles.input} placeholder="Informe sua senha" />
                        </View>

                        <View>
                            <Text style={styles.recoveryPassword}>Esqueceu sua senha?</Text>
                        </View>

                        <View style={styles.button}>
                            {loading ? <ActivityIndicator color="#fff" /> : <Text onPress={abaHome} style={styles.buttonText}>Iniciar sessão</Text>}
                        </View>

                        <View style={styles.socialMedia}>
                            <View style={styles.buttonFacebook}>
                                <MaterialCommunityIcons style={styles.iconSocial} name="facebook" size={22} color={colors.heading} />
                                <Text style={styles.buttonTextFacebook}>Facebook</Text>
                            </View>

                            <View style={styles.buttonGoogle}>
                                <Ionicons style={styles.iconSocial} name="ios-logo-google" size={19} color={colors.heading} />
                                <Text style={styles.buttonTextGoogle}>Google</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: "#fff"
    },

    imageLogin: {
        marginBottom: -274
    },

    image: {
        width: '100%',
        height: 500
    },

    content: {
        flex: 1,
        width: '100%'
    },

    formLogin: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },

    textLogin: {
        color: colors.heading,
        fontWeight: 'bold',
        fontSize: 24
    },

    controllerInput: {
        marginTop: 30,
        width: '100%'
    },


    icon: {
        left: -22
    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.heading,
        color: colors.heading,
        fontSize: 18,
        padding: 10,
        width: '100%',
    },

    recoveryPassword: {
        marginTop: 5,
        left: 60,
        color: colors.heading
    },

    button: {
        backgroundColor: colors.heading,
        padding: 20,
        marginTop: 30,
        width: '100%',
        borderRadius: 12
    },

    buttonText: {
        textAlign: 'center',
        color: colors.white,
        fontWeight: '700',
        fontSize: 17
    },

    socialMedia: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    iconSocial: {
        right: 5
    },

    buttonFacebook: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        padding: 20,
        height: 70,
        borderColor: colors.heading,
        borderWidth: 1,
        width: '50%',
        marginTop: 10,
        borderRadius: 12
    },

    buttonTextFacebook: {
        textAlign: 'center',
        color: colors.heading,
        fontWeight: '500',
        fontSize: 17
    },

    buttonGoogle: {
        backgroundColor: colors.white,
        padding: 20,
        height: 70,
        flexDirection: 'row',
        borderColor: colors.heading,
        borderWidth: 1,
        width: '50%',
        marginTop: 10,
        marginLeft: 3,
        borderRadius: 12,
    },

    buttonTextGoogle: {
        textAlign: 'center',
        color: colors.heading,
        fontWeight: '500',
        fontSize: 17,
    },
});