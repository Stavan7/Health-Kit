import React from 'react'
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Nav stacks  
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor={'#000'} animated={true} translucent />
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="Auth"
                    component={AuthStack}
                />
                <Stack.Screen
                    name="App"
                    component={HomeStack}
                />
            </Stack.Navigator>
        </NavigationContainer >
    )
}

export default RootNavigator
