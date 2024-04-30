import React, { useState } from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GradientButton from '../../components/GradientButton';

const SignUp = ({ navigation }) => {

    const [hidePass, setHidePass] = useState(true)
    const [hideConfirmPass, setHideConfirmPass] = useState(true)

    return (
        <SafeAreaView style={styles.background}>

            <Text style={styles.loginText}> Register </Text>
            <Text style={styles.subText}> Enter required details to {`\n`} create your account</Text>

            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <AntDesign name="checkcircle" size={25} color="#56C596" />
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Name"
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <Icon name="user" size={25} color="#808080" />
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    secureTextEntry={hidePass ? true : false}
                />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => setHidePass(!hidePass)}>
                    <Icon
                        size={25}
                        name={hidePass ? 'eye-off' : 'eye'}
                        color={hidePass ? '#808080' : '#56C596'}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Confirm password"
                    secureTextEntry={hideConfirmPass ? true : false}
                />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => setHideConfirmPass(!hideConfirmPass)}>
                    <Icon
                        size={25}
                        name={hideConfirmPass ? 'eye-off' : 'eye'}
                        color={hideConfirmPass ? '#808080' : '#56C596'}
                    />
                </TouchableOpacity>
            </View>

            <GradientButton
                title={'SIGN UP'}
                btnStyles={{ alignSelf: 'center', marginTop: 20 }}
                handleClick={() => navigation.replace('App', { screen: 'Home' })}
            />

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    loginText: {
        fontSize: 20,
        color: '#205072',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
    },
    subText: {
        fontFamily: 'Montserrat-Medium',
        color: '#56C596',
        fontSize: 16,
        marginVertical: 20,
        textAlign: 'center'
    },
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 15,
        width: '90%',
        alignSelf: 'center',
        paddingHorizontal: 15,
        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 14,
        color: '#205072',
        fontFamily: 'Montserrat-Regular'
    }
})

export default SignUp