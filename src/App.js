import './App.css'
import Kontakt from './Components/Kontakt';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Navbar from './Components/Navbar';
import { SliderData } from './data/SliderData';
import { useState } from 'react';
import Dropdown from './Components/Dropdown';
import GlobalStyle from "./globalStyle";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <HomePage slides={SliderData}/>
      <Kontakt />
      <Footer />
    </>
  );
}

export default App;
