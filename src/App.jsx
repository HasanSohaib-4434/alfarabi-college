import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
