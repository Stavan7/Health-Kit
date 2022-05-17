import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/header';
import LinearGradient from 'react-native-linear-gradient'


class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <Header />
                <View style={styles.view}>
                    <Text style={styles.headerText}> This is Health UX kit</Text>
                    <Text style={styles.headerText}> Welcome! </Text>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.subText}> A health vertical UI kit made with
                            {`\n`}love for Adobe XD
                        </Text>
                    </View>

                    <LottieView
                        loop
                        autoPlay
                        style={styles.image}
                        source={require('../assets/lottie.json')}
                    />

                    <LinearGradient
                        colors={['#0E8853', '#1B5F75']}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        style={styles.navContainer}>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => this.props.navigation.navigate('SignUp')}
                        >
                            <Text style={styles.navText}>GET STARTED</Text>
                        </TouchableOpacity>
                    </LinearGradient>


                    <View style={styles.signInView}>
                        <Text style={styles.signInText}>
                            Already haven an account?{' '}
                        </Text>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => this.props.navigation.navigate('SignIn')}>
                            <Text style={[styles.signInText, { color: '#205072' }]} > Sign In</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </SafeAreaView >

        )
    }
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 25,
        color: '#205072',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
    },
    subText: {
        textAlign: 'center',
        color: '#56C596',
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold'
    },
    image: {
        height: 350,
        width: '90%',
        marginVertical: 20,
    },
    navContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '8%',
        width: '80%',
        borderRadius: 30,
        marginTop: '12%'
    },
    navText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Montserrat-Bold'
    },
    signInView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    signInText: {
        color: '#7BE495',
        fontFamily: 'Montserrat-Medium'
    }
})


export default HomeScreen;