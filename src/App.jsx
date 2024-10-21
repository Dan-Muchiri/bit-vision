import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero/Hero'
import Header from './sections/Header/Header'
import Services from './sections/Services/Services';
import Clients from './sections/Clients/Clients';
import Featured from './sections/Featured/Featured';
import Industries from './sections/Industries/Industries';
import CTA from './sections/CTA/CTA';
import FAQ from './sections/FAQs/FAQ';
import Contact from './sections/Contact/Contact';
import Career from './sections/Career/Career';
import Footer from './sections/Footer/Footer';

function App() {
 

  return (
    <>
    <Router>
      <Header/>
      <Hero/>
      <Services/>
      <Clients/>
      <Featured/>
      <Industries/>
      <CTA/>
      <FAQ/>
      <Contact/>
      <Career/>
      <Footer/>
    </Router>  
    </>
  )
}

export default App
