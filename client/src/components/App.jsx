import React, { useState } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Home from "./Home";
import Settings from "./Settings";
import MovieSearch from "./MovieSearch";
import TheatreSearch from "./TheatreSearch";
import MovieName from "./MovieName";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [header, setHeader] = useState(true);
  return (
    <Router>
      <div>
        {header && <Header />}
        <Switch>
          <Route path="/Login" component={LoginForm} />
          <Route path="/Register" component={RegisterForm} />
          <Route path="/Home" component={Home} />
          <Route path="/Settings" component={Settings} />
          <Route
            path="/MovieSearch"
            exact
            render={(props) => <MovieSearch heading={setHeader} />}
          />
          <Route
            path="/TheatreSearch"
            exact
            render={(props) => <TheatreSearch heading={setHeader} />}
          />
          <Route path="/MovieName" exact component={MovieName} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
