import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "zain",
    age: 21
  }

  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-300 text-black rounded-xl mb-5'>Tailwind test</h1>
      <Card username="Chai aur Code" someObj={myObj} someArr={newArr} btnText="Click Me" />
      <Card username="Zain" btnText="Visit Me"/>
    </>

  )
}

export default App
