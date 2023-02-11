import React, { createContext, useEffect, useState, useContext } from "react";
import Cookies from "js-cookie";

const Loading = 0;
const SignedIn = 1;
const SignedOut = 2;
export const AuthStatus = {
    Loading,
    SignedIn,
    SignedOut
}
const defaultState = {
    authStatus: AuthStatus.Loading,
    setAuthStatus: (auth) => { }
}
export const AuthContext = createContext(defaultState);

export const AuthIsSignedIn = ({ children }) => {
    const { authStatus } = useContext(AuthContext)
    return <>{authStatus === AuthStatus.SignedIn ? children : null}</>
}

export const AuthIsNotSignedIn = ({ children }) => {
    const { authStatus } = useContext(AuthContext)

    return <>{authStatus === AuthStatus.SignedOut ? children : null}</>
}
export const AuthProvider = ({ children }) => {
    const [authStatus, setAuthStatus] = useState(AuthStatus.Loading);
    const accessToken = Cookies.get('accessToken');
    useEffect(() => {
        (async function () {
            if (accessToken) {
                setAuthStatus(AuthStatus.SignedIn);
            } else {
                setAuthStatus(AuthStatus.SignedOut);
            }
        })();
    }, [accessToken])
    if (authStatus === AuthStatus.Loading) {
        return null;
    }
    const state = {
        authStatus,
        setAuthStatus,
    }
    return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}
export default AuthProvider;







