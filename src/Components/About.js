import React from 'react';
import UnderConstruction from "../Images/underconstruction.gif";

const About = () => {
    return (
        <section className="padding">
        <div className= "padding center flex1">
        <h1 className="padding organicoTitle">This page is under construction</h1>
        <img src={UnderConstruction} alt= "gif"/>
        </div>
        </section>
        
    );
}

export default About;
