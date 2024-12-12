import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import './index.css'
import LandingPage from './pages/LandingPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
