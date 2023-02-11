import './App.css';
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Read from './Component/Read';
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import { AuthProvider, AuthIsSignedIn, AuthIsNotSignedIn } from './Contexts.js/AuthCon';
import Dashboard from './Component/Dashboard';

const SignInRoute = () => {
  (<BrowserRouter>
    <Routes>
      <Route exact path="/Signin" element={<Signin />} />
      <Route exact path="/Signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
  )
}
const MainRoute = () => {
  (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Read />} />
      </Routes>
    </BrowserRouter>
  )
}

function App() {
  return (
    <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <AuthProvider>
        <AuthIsSignedIn>
          <MainRoute />
        </AuthIsSignedIn>
        <AuthIsNotSignedIn>
          <SignInRoute />
        </AuthIsNotSignedIn>
      </AuthProvider>
    </div>
  );
}

export default App;
