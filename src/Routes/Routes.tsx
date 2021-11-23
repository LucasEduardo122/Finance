import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'

import Home from '../pages/home';
import Login from '../pages/login2';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}
