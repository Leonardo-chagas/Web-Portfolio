/* import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; */
import React, { useRef, useState, useLayoutEffect } from 'react';
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toggle from './components/Toggle';
import './App.css';
import './css/Container.css'

function App() {
  const [isDark, setIsDark] = useState(true);

  const aboutRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();

  function scrollDown(ref) {
    if(ref == 1){
      aboutRef.current.scrollIntoView();
    }
    else if(ref == 2){
      skillsRef.current.scrollIntoView();
    }
    else if(ref == 3){
      projectsRef.current.scrollIntoView();
    }
    else if(ref == 4){
      contactRef.current.scrollIntoView();
    }
  }

  
  
  return (
    <div data-theme={isDark ? 'dark' : 'light'} id="bodyContainer">
    {/* <BrowserRouter>
      <Routes> */}
        {/* <Route path="/" element={<Navbar/>}> */}
          {/* <Route index element={<About/>}/>
          <Route path="/competencias"  element={<Skills/>}/>
          <Route path="/projetos" element={<Projects/>}/>
          <Route path="/contato" element={<Contact/>}/> */}
        {/* </Route> */}
      {/* </Routes>
    </BrowserRouter> */}
      <Navbar navFunction={scrollDown} isChecked={isDark} handleChange={() => setIsDark(!isDark)}/>
      {/* <Toggle/> */}
      <Title/>
      <div ref={aboutRef}>
        <About/>
      </div>
      <div ref={skillsRef}>
        <Skills/>
      </div>
      <div ref={projectsRef}>
        <Projects/>
      </div>
      <div ref={contactRef}>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
