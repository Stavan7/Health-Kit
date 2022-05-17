import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity
} from 'react-native'
import Header from '../components/header';
import LinearGradient from 'react-native-linear-gradient'

class NotificationScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hidePass: true,
            hideConfirmPass: true
        }
    }

    setHidePass() {
        this.setState({ hidePass: !this.state.hidePass });
    }

    setHideConfirmPass() {
        this.setState({ hideConfirmPass: !this.state.hideConfirmPass });
    }

    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header navigation={this.props.navigation} BackBtn />

                <View style={{ marginTop: 20 }}>
                    <Text style={styles.loginText}>Turn on notification</Text>
                </View>
                
                <LinearGradient
                     colors={['#0E8853', '#1B5F75']}
                    start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                    style={styles.navContainer}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate('Confirmation')}>
                        <Text style={styles.navText}>TURN ON </Text>
                    </TouchableOpacity>
                </LinearGradient>


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
        fontSize: 17,
        marginTop: 20,
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
})

export default NotificationScreen