import "./App.css";
import NavBar from "./Components/NavBar";
import { SignupPage } from "./Pages/SignupPage";
import { LoginPage } from "./Pages/LoginPage";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/organic.o">
          <HomePage />
        </Route>
        <Route path="/organic.o/login">
          <LoginPage />
        </Route>
        <Route path="/organic.o/signup">
          <SignupPage />
        </Route>
        <Route path="/organic.o/about">
          <AboutPage />
        </Route>
      </Switch>      
    </div>
  );
}

export default App;
