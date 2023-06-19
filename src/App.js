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
import PrivateRoutes from './utils/PrivateRoute';

import { auth } from "./firebaseconfig"
import { signOut } from 'firebase/auth';

import { useContext } from 'react';
import { AuthContext } from './contexts/DetailsContext';

import { QuizL1S1 } from './pages/quiz/level1/Quiz1';
import { QuizL1S2 } from './pages/quiz/level1/Quiz2';
import { QuizL1S3 } from './pages/quiz/level1/Quiz3';
import { QuizL1S4 } from './pages/quiz/level1/Quiz4';

import { QuizL2S1} from './pages/quiz/level2/Quiz1';
import { QuizL2S2 } from './pages/quiz/level2/Quiz2';
import { QuizL2S3 } from './pages/quiz/level2/Quiz3';
import { QuizL2S4 } from './pages/quiz/level2/Quiz4';

import { QuizL3S1 } from './pages/quiz/level3/Quiz1';
import { QuizL3S2 } from './pages/quiz/level3/Quiz2';
import { QuizL3S3} from './pages/quiz/level3/Quiz3';
import { QuizL3S4} from './pages/quiz/level3/Quiz4';
import { QuizL3S5 } from './pages/quiz/level3/Quiz5';

import { QuizL4S1 } from './pages/quiz/level4/Quiz1';
import { QuizL4S2 } from './pages/quiz/level4/Quiz2';
import { QuizL4S3} from './pages/quiz/level4/Quiz3';
import { QuizL4S4} from './pages/quiz/level4/Quiz4';
import { QuizL4S5 } from './pages/quiz/level4/Quiz5';

import { QuizL5S1 } from './pages/quiz/level5/Quiz1';
import { QuizL5S2 } from './pages/quiz/level5/Quiz2';
import { QuizL5S3} from './pages/quiz/level5/Quiz3';
import { QuizL5S4} from './pages/quiz/level5/Quiz4';
import { QuizL5S5 } from './pages/quiz/level5/Quiz5';

import { QuizL7S1 } from './pages/quiz/level7/Quiz1';
import { QuizL7S2 } from './pages/quiz/level7/Quiz2';

import { QuizL8S1 } from './pages/quiz/level8/Quiz1';
import { QuizL8S2 } from './pages/quiz/level8/Quiz2';
import { QuizL8S3 } from './pages/quiz/level8/Quiz3';
import { QuizL8S4 } from './pages/quiz/level8/Quiz4';

import { QuizL9S1 } from './pages/quiz/level9/Quiz1';
import { QuizL9S2 } from './pages/quiz/level9/Quiz2';
import { QuizL9S3 } from './pages/quiz/level9/Quiz3';
import { QuizL9S4 } from './pages/quiz/level9/Quiz4';
import { QuizL9S5 } from './pages/quiz/level9/Quiz5';
import { QuizL9S6 } from './pages/quiz/level9/Quiz6';
import { QuizL9S7 } from './pages/quiz/level9/Quiz7';

import { QuizL10S1 } from './pages/quiz/level10/Quiz1';
import { QuizL10S2 } from './pages/quiz/level10/Quiz2';
import { QuizL10S3 } from './pages/quiz/level10/Quiz3';
import { QuizL10S4 } from './pages/quiz/level10/Quiz4';
import { QuizL10S5 } from './pages/quiz/level10/Quiz5';

function App() {

  const { logoutUser } = useContext(AuthContext)

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
          <Route element={<PrivateRoutes />}>
            <Route path="profile/edit" element={<EditProfile />} />
            <Route element={<Navbar signUserOut={signUserOut} />} >
              <Route path="learn" element={<Dashboard />} />
              <Route path="leaderboard" element={<Leaderboard />} />
              <Route path="forum" element={<Forum />} />
              <Route path="profile" element={<Profile />} />
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
              <Route path='level3'>
                <Route path='1' element={<QuizL3S1 />} />
                <Route path='2' element={<QuizL3S2 />} />
                <Route path='3' element={<QuizL3S3 />} />
                <Route path='4' element={<QuizL3S4 />} />
                <Route path='5' element={<QuizL3S5 />} />
              </Route>
              <Route path='level4'>
                <Route path='1' element={<QuizL4S1 />} />
                <Route path='2' element={<QuizL4S2 />} />
                <Route path='3' element={<QuizL4S3 />} />
                <Route path='4' element={<QuizL4S4 />} />
                <Route path='5' element={<QuizL4S5 />} />
              </Route>
              <Route path='level5'>
                <Route path='1' element={<QuizL5S1 />} />
                <Route path='2' element={<QuizL5S2 />} />
                <Route path='3' element={<QuizL5S3 />} />
                <Route path='4' element={<QuizL5S4 />} />
                <Route path='5' element={<QuizL5S5 />} />
              </Route>
              <Route path='level7'>
                <Route path='1' element={<QuizL7S1 />} />
                <Route path='2' element={<QuizL7S2 />} />
              </Route>
              <Route path='level8'>
                <Route path='1' element={<QuizL8S1 />} />
                <Route path='2' element={<QuizL8S2 />} />
                <Route path='3' element={<QuizL8S3 />} />
                <Route path='4' element={<QuizL8S4 />} />
              </Route>
              <Route path='level9'>
                <Route path='1' element={<QuizL9S1 />} />
                <Route path='2' element={<QuizL9S2 />} />
                <Route path='3' element={<QuizL9S3 />} />
                <Route path='4' element={<QuizL9S4 />} />
                <Route path='5' element={<QuizL9S5 />} />
                <Route path='6' element={<QuizL9S6 />} />
                <Route path='7' element={<QuizL9S7 />} />
              </Route>
              <Route path='level10'>
                <Route path='1' element={<QuizL10S1 />} />
                <Route path='2' element={<QuizL10S2 />} />
                <Route path='3' element={<QuizL10S3 />} />
                <Route path='4' element={<QuizL10S4 />} />
                <Route path='5' element={<QuizL10S5 />} />
              </Route>
            </Route>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
