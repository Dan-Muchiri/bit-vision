import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero/Hero'
import Header from './sections/Header/Header'

function App() {
 

  return (
    <>
    <Router>
      <Header/>
      <Hero/>
    </Router>  
    </>
  )
}

export default App
