import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    hello renderings is rendering.
    <Hero />
    </>
  )
}

export default App
