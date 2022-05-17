import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import Header from '../components/header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient'

class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hidePass: true
        }
    }

    setHidePass() {
        this.setState({ hidePass: !this.state.hidePass });
    }

    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header navigation={this.props.navigation} BackBtn />

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.loginText}>Login</Text>
                    <Text style={styles.subText}> Enter your login details to{`\n`} access your account
                    </Text>
                </View>

                <View style={styles.formArea}>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email"
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                        <AntDesign name="checkcircle" size={25} color="#56C596" />
                    </View>

                </View>

                <View style={[styles.formArea, { marginTop: 20 }]}>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            secureTextEntry={this.state.hidePass ? true : false}
                        />
                        <TouchableOpacity
                            style={styles.icon}
                            onPress={() => this.setHidePass(!this.state.hidePass)}>
                            <Icon
                                name={this.state.hidePass ? 'eye-off' : 'eye'}
                                size={25}
                                color={this.state.hidePass ? '#808080' : '#56C596'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                    <View style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                    </View>
                </TouchableOpacity>


                <LinearGradient
                     colors={['#0E8853', '#1B5F75']}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={styles.navContainer}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('Notification')}>
                        <Text style={styles.navText}>LOGIN</Text>
                    </TouchableOpacity>
                </LinearGradient>

                <View style={styles.signUp}>
                    <Text style={styles.account}>Don’t have an account ?{' '}</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.signupBtn}> Sign Up</Text>
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
    formArea: {
        height: 80,
        paddingHorizontal: 25,
        marginTop: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#205072',
        fontFamily: 'Montserrat'
    },
    forgotPassword: {
        marginTop: 20,
        width: '80%',
        alignSelf: 'center',
        alignItems: 'flex-end'
    },
    forgotPasswordText: {
        fontSize: 16,
        color: '#56C596',
        fontFamily: 'Montserrat',
    },
    navContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '8%',
        width: '80%',
        borderRadius: 25,
        marginTop: '16%',
        alignSelf: 'center',
    },
    navText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold'
    },
    signUp: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    account: {
        color: '#56C596',
        fontSize: 16,
        fontFamily: 'Montserrat',
    },
    signupBtn: {
        color: '#205072',
        fontSize: 16,
        fontFamily: 'Montserrat'
    },
})

export default SignIn