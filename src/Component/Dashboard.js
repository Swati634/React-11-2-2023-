import React from 'react'
import { useAuth } from '../Contexts.js/AuthContext'

const Dashboard = () => {

    const {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth()

    const logIn = (e) => {
        e.preventDefault()
        setIsLoggedIn(true)
        setAuthUser({
            Name: 'maya'
        })
    }

    const logOut = (e) => {
        e.preventDefault(e)
        setIsLoggedIn(false)
        setAuthUser(null)
    }
    return (
        <>
            <span>User is currently:{isLoggedIn ? 'Logged-In' : 'Logged-Out'}</span>
            {isLoggedIn ? (<span>User name:{authUser.Name}</span>) : null}
            <br />
            {isLoggedIn
                ? <button onClick={(e) => { logOut(e) }}> Log Out</button>
                : <button onClick={(e) => { logIn(e) }}>Log In</button>}
        </>
    )
}

export default Dashboard
