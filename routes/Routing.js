import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NotificationScreen from '../screens/Notification';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ConfirmationScreen from '../screens/ConfirmationScreen';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import ForgotPasswordVerification from '../screens/ForgotPassword/ForgotPasswordVerification';
const Stack = createNativeStackNavigator();

class Routing extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='HomeScreen'>
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Notification"
                        component={NotificationScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Confirmation"
                        component={ConfirmationScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="ForgotPasswordVerification"
                        component={ForgotPasswordVerification}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}


export default Routing