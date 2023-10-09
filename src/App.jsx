import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { WebNavbar } from './components/Navbar'
import { Home } from './components/Home'
import Sitemap from '../sitemap.xml'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.scss'

function App() {
  return (
    <Router>
      <WebNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sitemap.xml" element={<Sitemap />} />
      </Routes>
    </Router>
  )
}

export default App
