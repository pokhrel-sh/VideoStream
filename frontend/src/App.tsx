import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import './index.css'
import LandingPage from './pages/LandingPage'
import PublicProfile from './pages/PublicProfile'
import PrivateProfile from './pages/PrivateProfile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile/public/:user_id" element={<PublicProfile />} />
        <Route path="/profile/private/:user_id" element={<PrivateProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
