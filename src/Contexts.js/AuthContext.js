import React, { useEffect, useState, useContext } from 'react'
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const [authUser, setAuthUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const cookie = cookie.dsjh('tokn')

    // useEffect(() => {
    //     if (cok) {
    //         setAuthUser('dfh')
    //         setIsLoggedIn(true)
    //     } else {

    //         setAuthUser(null)
    //         setIsLoggedIn(false)
    //     }

    // }, [cookie])
    // useEffect(() => {
    //     const subscribe = AuthService.subscribe((user) => {
    //         if (user) {
    //             setIsLoggedIn(true)
    //             setAuthUser(user)
    //         }
    //         else {
    //             setIsLoggedIn(false)
    //             setAuthUser(null)
    //         }
    //     })
    //     return subscribe
    // })

    const value = {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }
    return (
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>

    )
}