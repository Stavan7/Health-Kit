import React, { Component } from 'react'
import {
    Image,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const Header = ({ navigation, BackBtn }) => {
    return (
        <View style={styles.background}>
            <View style={styles.bakcBtnContainer}>
                {
                    BackBtn ?
                        <TouchableOpacity 
                            onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back"
                                size={25}
                                color='#205072'
                            />
                        </TouchableOpacity>
                        : null
                }
            </View>
            <Image
                source={require('../assets/header.jpeg')}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        padding: 35,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    bakcBtnContainer: {
        position: 'absolute',
        left: 14,
    }, 
    image: {
        height: 30
    }
})

export default Header