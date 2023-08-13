import React, { useState } from 'react'
import './App.css';
const App = () => {

  const [myname,setMyname] = useState('saurabh')
  function handle(){
    setMyname('sumit')
  }

  return (
    <div>
      <h1>{myname}</h1>
      <button onClick={handle}>click me</button>
    </div>
  )
}

export default App