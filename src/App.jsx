import { useState } from 'react'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Skills from './Pages/Skills'
import "./style.css"
import {Routes,Route,Link} from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
