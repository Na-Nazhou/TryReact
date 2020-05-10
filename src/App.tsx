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
import { App as TodoApp } from "./Redux/App";

function Home() {
  return <h2>Home</h2>;
}

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
            <li>
              <NavLink to="/redux-todolist">To-do list</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tic-tac-toe" component={TicTacToe} />
          <Route path="/clock" component={Clock} />
          <Route path="/topics" component={Topics} />
          <Route path="/context-demo" component={ContextDemo} />
          <Route path="/temperature-calculator" component={TemperatureCalculator} />
          <Route path="/outer-click" component={OuterClickExample} />
          <Route path="/redux-todolist" component={TodoApp} />
          {/* Less specific ones at the last */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}
