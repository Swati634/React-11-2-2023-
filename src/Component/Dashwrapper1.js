import React from 'react'
import { Navigate } from "react-router-dom";

const Dashwrapper1 = ({ children, authStatus }) => {
    console.log(authStatus, '-------')
    return (
        authStatus === 1 ? <><Navigate to="/" /></> : { children }
    )
}
export default Dashwrapper1;