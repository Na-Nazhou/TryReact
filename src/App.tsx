import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import { Game as TicTacToe } from "./Tic-Tac-Toe/Game";
import { Clock } from "./Hooks/Clock";
import { Topics } from "./React-router/Topics";
import { ContextDemo } from "./Context/ContextDemo"
import { TemperatureCalculator } from "./Form/TemperatureCalculator";
import { OuterClickExample } from "./Accessibility/OuterClickExample";

export const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tic-tac-toe">Tic-Tac-Toe</NavLink>
            </li>
            <li>
              <NavLink to="/clock">Clock</NavLink>
            </li>
            <li>
              <NavLink to="/topics">Topics</NavLink>
            </li>
            <li>
              <NavLink to="/context-demo">ContextDemo</NavLink>
            </li>
            <li>
              <NavLink to="/temperature-calculator">TemperatureCalculator</NavLink>
            </li>
            <li>
              <NavLink to="/outer-click">OuterClick</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tic-tac-toe">
            <TicTacToe />
          </Route>
          <Route path="/clock">
            <Clock />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/context-demo">
            <ContextDemo />
          </Route>
          <Route path="/temperature-calculator">
            <TemperatureCalculator />
          </Route>
          <Route path="/outer-click">
            <OuterClickExample />
          </Route>
          {/* Less specific ones at the last */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}
