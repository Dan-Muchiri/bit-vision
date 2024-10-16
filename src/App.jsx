import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero/Hero'
import Header from './sections/Header/Header'
import Services from './sections/Services/Services';
import Clients from './sections/Clients/Clients';
import Featured from './sections/Featured/Featured';

function App() {
 

  return (
    <>
    <Router>
      <Header/>
      <Hero/>
      <Services/>
      <Clients/>
      <Featured/>
    </Router>  
    </>
  )
}

export default App
