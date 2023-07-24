import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header'
import Footer from './components/Footer'
import Slide from './components/Slide';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Aside from './components/Aside';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Slide />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Aside />
      <Footer />
    </BrowserRouter>
  )
}

export default App