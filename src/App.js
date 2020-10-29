import React from "react";
import Navbar from "../src/layout/components/Navbar";
import home from "../src/pages/Home";
import about from "../src/pages/About";
import RecipeState from "../src/context/recipe/RecipeState";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <RecipeState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/about" component={about} />
            </Switch>
          </div>
        </div>
      </Router>
    </RecipeState>
  );
}

export default App;
