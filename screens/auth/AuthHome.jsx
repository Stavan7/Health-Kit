import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import LottieView from 'lottie-react-native';
import GradientButton from '../../components/GradientButton';

const AuthHome = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.background}>
            <Text style={styles.headerText}> This is Health UX kit</Text>
            <Text style={styles.headerText}> Welcome! </Text>

            <Text style={styles.subText}> A health vertical UI kit made with
                {`\n`}love for Adobe XD
            </Text>

            <LottieView
                loop
                autoPlay
                style={styles.image}
                source={require('../../assets/lottie.json')}
            />
            <GradientButton
                title={'GET STARTED'}
                btnStyles={{ marginTop: 20 }}
                handleClick={() => navigation.navigate('SignUp')}
            />

            <View style={styles.signInView}>
                <Text style={styles.signInText}>Already haven an account?{' '}</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('SignIn')}>
                    <Text style={[styles.signInText, { color: '#205072', fontFamily: 'Montserrat-Medium' }]}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    headerText: {
        fontSize: 25,
        color: '#205072',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
    },
    subText: {
        marginTop: 20,
        textAlign: 'center',
        color: '#56C596',
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold'
    },
    image: {
        height: 250,
        width: '100%',
        marginVertical: 20,
    },
    signInView: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    signInText: {
        fontSize: 16,
        color: '#7BE495',
        fontFamily: 'Montserrat-Regular'
    }
})

export default AuthHome;
