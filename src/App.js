import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Login } from './pages/login/Login';
import { Dashboard } from './pages/dashboard/Dashboard'
import { Forum } from './pages/forum/Forum'
import { Leaderboard } from './pages/leaderboard/Leaderboard'
import { Profile } from './pages/profile/Profile'
import { Level1 } from './pages/quiz/level1/Level1'


function App() {
  return (
    <div id="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Navbar />} >
            <Route path="/learn" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/quiz" element={<Level1 />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
