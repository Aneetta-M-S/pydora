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

import { QuizL1S1 } from './pages/quiz/level1/Quiz1';
import { QuizL1S2 } from './pages/quiz/level1/Quiz2';
import { QuizL1S3 } from './pages/quiz/level1/Quiz3';
import { QuizL1S4 } from './pages/quiz/level1/Quiz4';

import { QuizL2S1 } from './pages/quiz/level2/Quiz1';
import { QuizL2S2 } from './pages/quiz/level2/Quiz2';
import { QuizL2S3 } from './pages/quiz/level2/Quiz3';
import { QuizL2S4 } from './pages/quiz/level2/Quiz4';

import { QuizL7S1 } from './pages/quiz/level7/Quiz1';
import { QuizL7S2 } from './pages/quiz/level7/Quiz2';

import { QuizL10S1 } from './pages/quiz/level10/Quiz1';
import { QuizL10S2 } from './pages/quiz/level10/Quiz2';
import { QuizL10S3 } from './pages/quiz/level10/Quiz3';
import { QuizL10S4 } from './pages/quiz/level10/Quiz4';
import { QuizL10S5 } from './pages/quiz/level10/Quiz5';

function App() {

  const { user, logoutUser } = useContext(AuthContext)
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
              <Route path='1' element={<QuizL1S1 />} />
              <Route path='2' element={<QuizL1S2 />} />
              <Route path='3' element={<QuizL1S3 />} />
              <Route path='4' element={<QuizL1S4 />} />
            </Route>
            <Route path='level2'>
              <Route path='1' element={<QuizL2S1 />} />
              <Route path='2' element={<QuizL2S2 />} />
              <Route path='3' element={<QuizL2S3 />} />
              <Route path='4' element={<QuizL2S4 />} />
            </Route>
            <Route path='level7'>
              <Route path='1' element={<QuizL7S1 />} />
              <Route path='2' element={<QuizL7S2 />} />
            </Route>
            <Route path='level10'>
              <Route path='1' element={<QuizL10S1 />} />
              <Route path='2' element={<QuizL10S2 />} />
              <Route path='3' element={<QuizL10S3 />} />
              <Route path='4' element={<QuizL10S4 />} />
              <Route path='5' element={<QuizL10S5 />} />
            </Route>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
