import './App.css';
import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Login } from './pages/login/Login';
import { Dashboard } from './pages/dashboard/Dashboard'
import { Forum } from './pages/forum/Forum'
import { Leaderboard } from './pages/leaderboard/Leaderboard'
import { Profile } from './pages/profile/Profile'
import { EditProfile } from './pages/profile/EditProfile'
import { Level1 } from './pages/quiz/level1/Level1'

import { auth } from "./firebaseconfig"
import { signOut } from 'firebase/auth';



function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };


  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
          <Route element={<Navbar isAuth={isAuth} signUserOut={signUserOut} />} >
            <Route path="/learn" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/profile">
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/edit" element={<EditProfile />} />
            </Route>
          </Route>
          <Route path="/quiz" element={<Level1 />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
