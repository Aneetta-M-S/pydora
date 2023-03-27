import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import  {UserProvider}  from "./contexts/userContext"
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Signin } from './pages/Signin';
import { SignUp } from './pages/Signup';
import { ForgotPassword } from './pages/ForgotPassword';
import { Navbar } from './components/Navbar';
import PrivateRoute from "./privateRoute"


function App() {

  return (
    <div className="App">
      
      <Router>
      <UserProvider>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/sign-up" element={<SignUp />} /> */}
            {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
            <Route exact path="/sign-in" element={<Signin />} />
            <Route path='/' element={<PrivateRoute />}>
              <Route path="/home" exact element={<Home />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/" element={<Navigate to="/home" replace />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
          </UserProvider>
      </Router>
    </div>
  );
}

export default App;
