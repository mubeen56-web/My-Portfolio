import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Experience from './Components/Experience'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  )
}

export default App
