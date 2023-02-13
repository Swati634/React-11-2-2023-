import React, { useContext } from 'react'
import { AuthContext } from '../Contexts.js/AuthCon'
import Read from './Read';
import Signin from './Signin';
import Signup from './Signup';
import { AuthIsNotSignedIn, AuthIsSignedIn } from '../Contexts.js/AuthCon'
import { Routes, BrowserRouter, Route } from "react-router-dom";

const Dashwrapper = ({ children, authStatus }) => {
    console.log(authStatus, '-------')
    return (
        <>
            {
                authStatus === 1 ? <>
                    <AuthIsSignedIn>
                        <Routes>
                            <Route exact path="/" element={<Read />} />
                        </Routes>
                    </AuthIsSignedIn></> : <AuthIsNotSignedIn>
                    <Routes>
                        {/* <Dashwrapper authStatus={authStatus}> */}
                        {/* <Route path="/auth" element={this.state.token ? <Navigate to="/competition" /> : AuthPage} */}
                        <Route exact path="/signin" element={<Signin />} />
                        <Route exact path="/signup" element={<Signup />} />
                        {/* </Dashwrapper> */}
                    </Routes>
                </AuthIsNotSignedIn>
            }
        </>
    )
}

export default Dashwrapper
