import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    View,
    SafeAreaView
} from 'react-native'

class NotificationScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.background}>
                <View>
                    <Text>Notification</Text>
                </View>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    },
})

export default NotificationScreen