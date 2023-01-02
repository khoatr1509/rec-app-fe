import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import HomePage from "./pages/HomePage";
import { Months } from "./pages/Months";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Months />
        </Route>
        {/* <Route path="/list">
          <div>Hello</div>
        </Route> */}
        <Route path="/topics">
          <Months />
        </Route>
        <Route path="/" >
          <Months />
        </Route>
      </Switch>
    </Router>

  );
}
export default App;
