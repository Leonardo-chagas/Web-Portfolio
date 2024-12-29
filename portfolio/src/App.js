import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Navbar/>}> */}
          <Route index element={<About/>}/>
          <Route path="/competencias"  element={<Skills/>}/>
          <Route path="/projetos" element={<Projects/>}/>
          <Route path="/contato" element={<Contact/>}/>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
