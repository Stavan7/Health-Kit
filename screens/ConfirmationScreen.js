import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import Header from '../components/header';
import LinearGradient from 'react-native-linear-gradient';
import OTPInputView from '@twotalltotems/react-native-otp-input';

class ConfirmationScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
        };
    }

    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header navigation={this.props.navigation} BackBtn />

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.loginText}>Verification</Text>
                    <Text style={styles.subText}>
                        We've sent the code to {`\n`} kulkarnistavan25@gmail.com
                    </Text>
                </View>


                <View style={{ justifyContent: 'center', alignItems: 'center', height: 200 }}>
                    <OTPInputView
                        pinCount={6}
                        autoFocusOnLoad
                        style={styles.OTP}
                        code={this.state.code}
                        codeInputFieldStyle={styles.underlineStyleBase}
                        codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeChanged={text => this.setState({ ...this.state, code: text })}
                        onCodeFilled={code => { console.log(`Code is ${code}, you are good to go!`) }}
                    />
                </View>

                <LinearGradient
                    colors={['#7BE495', '#329D9C']}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={styles.navContainer}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('SignIn')}>
                        <Text style={styles.navText}>CONTINUE</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <View style={styles.btm}>
                    <Text style={styles.btmText}>I didn't receive the code, </Text>
                    <TouchableOpacity>
                        <Text style={styles.resend}>Resend</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#fff'
    },
    loginText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 23,
        color: '#205072',
        textAlign: 'center',
    },
    subText: {
        fontFamily: 'Montserrat-Bold',
        color: '#56C596',
        marginTop: 20,
        fontSize: 17,
        textAlign: 'center'
    },
    OTP: {
        width: '90%',
        height: 140
    },
    underlineStyleBase: {
        borderWidth: 2,
        color: '#000000',
        borderRadius: 20,
        fontSize: 16,
        width: 50,
        height: 65,
    },
    underlineStyleHighLighted: {
        opacity: 0.5,
        borderColor: '#205072',
        color: '#205072'
    },
    navContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '8%',
        width: '80%',
        borderRadius: 25,
        marginTop: 20,
        alignSelf: 'center',
    },
    navText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold'
    },
    btm: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    btmText: {
        color: '#56C596',
        fontSize: 16,
        fontFamily: 'Montserrat',
    },
    resend: {
        color: '#205072',
        fontSize: 16,
        fontFamily: 'Montserrat'
    },
})

export default ConfirmationScreen