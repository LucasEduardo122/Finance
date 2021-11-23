type Response = {
    token : string,
    user: {
        name: string,
        email: string,
        password: string
    }
}

export function signIn() : Promise<Response> {
    return new Promise((resolve => {
        setTimeout(() => {
            resolve({
                token: 'afsdfa0sdfa1sdfa23s1fasdf0afasdsfrtfghdfgh',
                user: {
                    name: "Lector133",
                    email: 'lector@gmail.com',
                    password: '12234'
                }
            })
        }, 2000);
    }));
}