import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import colors from '../styles/colors';
import image from '../assets/image.png'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

export default function Login() {
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView style={styles.container} behavior="height">
                
                <View style={styles.imageLogin}>
                    <Image source={image} style={styles.image} resizeMode="cover" />
                </View>
                
                <View style={styles.content}>
                    <View style={styles.formLogin}>

                        <View>
                            <Text style={styles.textLogin}>Login</Text>
                        </View>

                        <View style={styles.controllerInput}>
                            <TextInput style={styles.input} placeholder="Informe seu E-mail" />
                            <MaterialCommunityIcons style={styles.icon} name="email-multiple-outline" size={22} color={colors.heading} />
                        </View>

                        <View style={styles.controllerInput}>
                            <TextInput style={styles.input} placeholder="Informe sua senha" />
                            <MaterialCommunityIcons style={styles.icon} name="shield-key-outline" size={22} color={colors.heading} />
                        </View>

                        <View>
                            <Text style={styles.recoveryPassword}>Esqueceu sua senha?</Text>
                        </View>

                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Iniciar sessão</Text>
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
        justifyContent: 'space-around'
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
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    icon: {
        left: -22
    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.heading,
        color: colors.heading,
        fontSize: 18,
        width: '100%',
        marginTop: 10,
        padding: 10,
    },

    recoveryPassword: {
        marginTop: 10,
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