import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';



import HOme from './Components/Home/Home';
import Navbar from './Components/NavBar/Navbar';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div id="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Navigate to='home' replace />} />
          <Route path='/home' element={<HOme /> } />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
