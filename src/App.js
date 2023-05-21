import './App.css';
// import { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Login } from './pages/login/Login';
import { Dashboard } from './pages/dashboard/Dashboard'
import { Forum } from './pages/forum/Forum'
import { Leaderboard } from './pages/leaderboard/Leaderboard'
import { Profile } from './pages/profile/Profile'
import { EditProfile } from './pages/profile/EditProfile'

import { auth } from "./firebaseconfig"
import { signOut } from 'firebase/auth';

import { useEffect, useContext } from 'react';
import { AuthContext } from './contexts/DetailsContext';

import { Quiz1 } from './pages/quiz/level1/Quiz1'
import { Quiz2 } from './pages/quiz/level1/Quiz2';
import { Quiz3 } from './pages/quiz/level1/Quiz3';
import { Quiz4 } from './pages/quiz/level1/Quiz4';
import { Quiz45 } from './pages/quiz/level10/Quiz45';

function App() {

  const {user, logoutUser} = useContext(AuthContext)
  useEffect(() => {
    console.log(user)
  }, [user])

  const signUserOut = () => {
    signOut(auth).then(() => {
      logoutUser();
      window.location.pathname = "/";
    });
  };


  return (
    <div id="App">
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route element={<Navbar signUserOut={signUserOut} />} >
            <Route path="learn" element={<Dashboard />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="forum" element={<Forum />} />
            <Route path="profile">
              <Route index element={<Profile />} />
              <Route path="edit" element={<EditProfile />} />
            </Route>
          </Route>
          <Route path="quiz">
            <Route path='level1'>
              <Route path='1' element={<Quiz1 />}/>
              <Route path='2' element={<Quiz2 />}/>
              <Route path='3' element={<Quiz3 />}/>
              <Route path='4' element={<Quiz4 />}/>
            </Route>
            <Route path='level10'>
              <Route path='1' element={<Quiz45 />}/>
              {/* <Route path='2' element={<Quiz2 />}/>
              <Route path='3' element={<Quiz3 />}/>
              <Route path='4' element={<Quiz4 />}/> */}
            </Route>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;