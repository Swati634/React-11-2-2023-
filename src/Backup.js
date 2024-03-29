import './App.css';
import React, { useContext } from 'react'
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Read from './Component/Read';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import { AuthProvider, AuthIsSignedIn, AuthIsNotSignedIn } from './Contexts.js/AuthCon';
import Dashwrapper from './Component/Dashwrapper';
import { AuthContext } from './Contexts.js/AuthCon';

function App() {
    const { authStatus, setAuthStatus } = useContext(AuthContext)
    console.log(authStatus, '-------signup')
    return (
        <div className="main">
            <h2 className="main-header">React Crud Operations</h2>
            <BrowserRouter>
                <AuthProvider>
                    {/* <Dashwrapper authStatus={authStatus} /> */}

                    <AuthIsSignedIn>
                        <Routes>
                            <Route exact path="/" element={<Read />} />
                        </Routes>
                    </AuthIsSignedIn>

                    <AuthIsNotSignedIn>
                        <Routes>
                            {/* <Dashwrapper authStatus={authStatus}> */}
                            {/* <Route path="/auth" element={this.state.token ? <Navigate to="/competition" /> : AuthPage} */}
                            <Route exact path="/signin" element={authStatus === 1 ? <Navigate to='/' /> : <Signin />} />
                            <Route exact path="/signup" element={<Signup />} />
                            {/* </Dashwrapper> */}
                        </Routes>
                    </AuthIsNotSignedIn>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;


//2 dashwrapper,1
import './App.css';
import React, { useContext } from 'react'
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Read from './Component/Read';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import { AuthProvider } from './Contexts.js/AuthCon';
import Dashwrapper from './Component/Dashwrapper';
import Dashwrapper1 from './Component/Dashwrapper1';
import { AuthContext } from './Contexts.js/AuthCon';

function App() {
    const { authStatus, setAuthStatus } = useContext(AuthContext)
    console.log(authStatus, '-----------------------')
    return (
        <>
            <div className="main">
                <h2 className="main-header">React Crud Operations{authStatus}</h2>
                <BrowserRouter>
                    <Routes>
                        <Dashwrapper authStatus={authStatus}>
                            <Route exact path="/" element={<Read />} />
                        </Dashwrapper>
                        {/* </Routes>
            <Routes> */}
                        <Dashwrapper1 authStatus={authStatus}>
                            <Route exact path="/signin" element={<Signin />} />
                            <Route exact path="/signup" element={<Signup />} />
                        </Dashwrapper1>
                    </Routes>
                </BrowserRouter>
            </div >
        </>
    );
}

export default App;
