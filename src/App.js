import "./App.css";
import NavBar from "./Components/NavBar";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ProfilePage from "./Pages/ProfilePage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/profile">
          <ProfilePage/>
        </Route>
      </Switch>      
    </div>
  );
}

export default App;
