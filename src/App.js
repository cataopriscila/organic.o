import React, { Component } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { HomePage } from "./Pages/HomePage";

//import { LoginPage } from './Pages/LoginPage';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>        
        <HomePage/>        
        <Footer/>
      </div>
    );
  }
}
export default App;
