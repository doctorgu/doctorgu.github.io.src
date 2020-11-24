import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SnakeToPascal from "./pages/database/snakeToPascal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/database/db-diagram">DB Diagram</Link>
            </li>
          </ul>

          <hr />

          <Switch>
            <Route exact path="/database/db-diagram">
              <SnakeToPascal />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
