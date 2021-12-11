import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'

function App() {
  const dateT = new Date()
  const [hr, setHr] = useState(dateT.getHours())
  const [min, setMin] = useState(dateT.getMinutes())

  const [sec, setSec] = useState(dateT.getSeconds())

  useEffect(() => {
    setTimeout(() => {
      setSec(dateT.getSeconds())
      setMin(dateT.getMinutes())
      setHr(dateT.getHours())
    }, 1000)
  })
  
  return (
    <div className="App">
      <div className="date-time">{dateT.getDate()}/{dateT.getMonth()}/{dateT.getFullYear()}, {hr}:{min}:{sec}</div>
    </div>
  );
}

export default App;
