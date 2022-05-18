import React, {useState} from 'react';
import logo from './logo.png'
import './App.css'
import Dev from '../components/Dev'

const App = () => {

  const [dev, setDev] = useState(1)

  return (
    <>
    {
       dev &&  <Dev/>
    }
    
    </>
  )
}

export default App
