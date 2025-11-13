import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/index'
import Login from './pages/login'
import Feed from './pages/feed'
import Profile from './pages/profile'
import AdminDashboard from './pages/admin/dashboard'
import AdminChecklist from './pages/admin/checklist'

export default function App() {
  return (
    <Router>
      <nav className="bg-grove-dark text-grove-green p-4 flex justify-around">
        <Link to="/">Home</Link>
        <Link to="/feed">Feed</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/admin/dashboard">Admin</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/checklist" element={<AdminChecklist />} />
      </Routes>
    </Router>
  )
}
