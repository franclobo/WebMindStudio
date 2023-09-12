import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { WebNavbar } from './components/Navbar'
import { Home } from './components/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.scss'

function App() {
  return (
    <Router>
      <WebNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
