import './App.css';
import React, { useContext } from 'react'
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Read from './Component/Read';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import { AuthContext } from './Contexts.js/AuthCon';

function App() {
  const { authStatus, setAuthStatus } = useContext(AuthContext)
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Routes>
            {
              authStatus === 1
                ?
                <>
                  <Route exact path="/" element={<Read />} />
                </> :
                <>
                  <Route path="/signin" element={<Signin />} />
                  <Route path="/signup" element={<Signup />} />
                </>
            }
          </Routes>
        </BrowserRouter>
      </div >
    </>

  );
}

export default App;



