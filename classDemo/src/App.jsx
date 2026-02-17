import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GameTimer, UnMount, UserProfile } from './class/life'

function App() {
  const [count, setCount] = useState(0)

  return <>
      <UnMount/>
      <GameTimer/>
      <UserProfile userId="1"/>
  </>
}

export default App
