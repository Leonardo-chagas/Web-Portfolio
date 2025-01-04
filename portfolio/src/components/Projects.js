import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useLayoutEffect } from 'react'
import "../css/Container.css"

function Projects() {
    useLayoutEffect(() => {
            document.body.style.backgroundColor = "#212121"
       });
    return (
        <div id="bodyContainer">
            <Navbar current={3}/>
            <Footer/>
        </div>
    );
}

export default Projects;