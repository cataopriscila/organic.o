import React from 'react';
import { Container } from 'reactstrap';
import UnderConstruction from "../Images/underconstruction.gif";

const About = () => {
    return (
        <section className="padding">
        <div className= "padding center flex1">
        <Container className="padding">
           <h1 className="padding organicoTitle">This page is under construction</h1>
        <img width= "70%" src={UnderConstruction} alt= "gif"/> 
        </Container>
        
        </div>
        </section>
        
    );
}

export default About;
