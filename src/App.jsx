import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Components/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Hero />
    <Contact />
    </>
  )
}

export default App
