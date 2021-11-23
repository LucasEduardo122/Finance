import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/auth';

import Login from '../pages/login2';

import AuthRoutes from './Routes';


export default function Routes() {
    const {logado} = useAuth();

    return(
        <NavigationContainer>
            {logado ? <AuthRoutes /> : <Login />}
        </NavigationContainer>
    )
}
