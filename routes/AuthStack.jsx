import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import SignIn from '../screens/auth/SignIn';
import SignUp from '../screens/auth/SignUp';
import AuthHome from '../screens/auth/AuthHome';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='AuthHome'>
			<Stack.Screen
				name="AuthHome"
				component={AuthHome}
			/>
			<Stack.Screen
				name="SignIn"
				component={SignIn}
			/>
			<Stack.Screen
				name="SignUp"
				component={SignUp}
			/>
		</Stack.Navigator>
	)
}

export default AuthStack
