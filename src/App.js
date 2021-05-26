import React, { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { LandingPage } from "./Pages/LandingPage";

//import { LoginPage } from './Pages/LoginPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>        
        <LandingPage/>        
        <Footer/>
      </div>
    );
  }
}
export default App;
