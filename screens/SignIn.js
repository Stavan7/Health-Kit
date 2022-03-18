import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text
} from 'react-native'
import Header from '../components/header'

export class SignIn extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header navigation={this.props.navigation} BackBtn />

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.loginText}>Login</Text>
                    <Text style={styles.subText}>{`Enter your login details to 
access your account`}</Text>
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
        fontSize: 17,
        color: '#205072',
        textAlign: 'center',
    },
    subText: {
        fontFamily: 'Montserrat-Medium',
        color: '#56C596',
        marginTop: 20,
        textAlign: 'center'
    }
})

export default SignIn