import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens 
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
	return (
		<Stack.Navigator
			initialRouteName='Home'
			screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: { fontFamily: 'Montserrat-Bold', fontSize: 20, color: '#205072' }
			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
			/>
		</Stack.Navigator>
	)
}

export default HomeStack
