import Navbar from "./Navbar";
import Footer from "./Footer";
import React, { useLayoutEffect } from 'react'

function Skills() {
    useLayoutEffect(() => {
            document.body.style.backgroundColor = "#212121"
       });
    return (
        <div>
            <Navbar/>
            <Footer/>
        </div>
    );
}

export default Skills;