import React, { useState } from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Home from "./Home";
import Settings from "./Settings";
import MovieSearch from "./MovieSearch";
import TheatreSearch from "./TheatreSearch";
import MovieName from "./MovieName";
import MovieActor from "./MovieActor";
import MovieDate from "./MovieDate";
import TheatreName from "./TheatreName";
import TheatreArea from "./TheatreArea";
import UserTicketBooking from "./UserTicketBooking";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  const [header, setHeader] = useState(true);
  return (
    <Router>
      <div>
        {header && <Header />}

        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
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
          <Route path="/MovieActor" exact component={MovieActor} />
          <Route path="/MovieDate" exact component={MovieDate} />
          <Route path="/TheatreName" exact component={TheatreName} />
          <Route path="/TheatreArea" exact component={TheatreArea} />
          <Route
            path="/UserTicketBooking"
            exact
            component={UserTicketBooking}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
