import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";

const Dashwrapper = ({ children, authStatus }) => {
    console.log(authStatus, '-------')
    return (
        authStatus !== 1 ? <><Navigate to="/signin" /></> : { children }
    )
}
export default Dashwrapper