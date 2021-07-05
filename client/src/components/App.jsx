import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/Login" component={LoginForm} />
        <Route path="/Register" component={RegisterForm} />
        <Route path="/Home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
