import React from 'react';
import './App.css';
import Header from "./components/Layout/Header";
import Pizzas from "./components/Pizzas/Pizzas";
import Checkout from "./components/Checkout/Checkout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/pizzas">
            <Pizzas/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
