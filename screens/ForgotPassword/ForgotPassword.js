import React, { Component } from 'react'
import {
    Text,
    View,
    TextInput,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import Header from '../../components/header';
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign';

class ForgotPassword extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: ''
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header navigation={this.props.navigation} BackBtn />

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.loginText}>Forgot Password</Text>
                    <Text style={styles.subText}>
                        Please enter your email address{`\n`}to reset your password.
                    </Text>
                </View>

                <View style={styles.formArea}>
                    <View style={styles.container}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            defaultValue={this.state.email}
                            onChangeText={text =>
                                this.setState({ ...this.state, email: text })
                            }
                        />
                        <AntDesign name="checkcircle" size={25} color="#56C596" />
                    </View>

                </View>

                <LinearGradient
                    colors={['#7BE495', '#329D9C']}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={styles.navContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate('ForgotPasswordVerification')}>
                        <Text style={styles.navText}>CONTINUE</Text>
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

export default ForgotPassword