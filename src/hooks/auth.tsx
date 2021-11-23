import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as auth from '../services/ayth'

type User = {
    id: string | null,
    name: string | null,
    token: string | null,
    email: string | null,
    avatar: string | null,
    userNamee: string | null
}


type createContextData = {
    user: User,
    Login: ({ email, password }: DataForm) => Promise<void>,
    logado: boolean,
    logOut: () => Promise<void>,
}

type RoutesName = {
    children: ReactNode
}

type DataForm = {
    email: string;
    password: string
}

export const AuthContext = createContext({} as createContextData)

function AuthProvider({ children }: RoutesName) {
    const [user, setUser] = useState<User>({} as User);
    const [singIn, setSingIn] = useState(false);

    async function Login({ email, password }: DataForm) {
        const response = await auth.signIn();

        const { token, user } = response;

        if (email === user.email && password === user.password) {

            setUser({
                id: '1',
                name: user.name,
                token: token,
                email: user.email,
                avatar: 'avatar',
                userNamee: user.name
            });

            setSingIn(true);

        }
    }

    async function logOut() {
        const dado = {
            id: null,
            name: null,
            token: null,
            email: null,
            avatar: null,
            userNamee: null
        };


        setUser(dado);

        setSingIn(false)
    }

    return (
        <AuthContext.Provider value={{ user, Login, logOut,  logado: singIn }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}


export {
    AuthProvider,
    useAuth,
}




