import React from "react";
import Navbar from "../src/layout/components/Navbar";
import Home from "../src/pages/Home";
import Footer from "./layout/components/Footer";
import RecipeState from "../src/context/recipe/RecipeState";
import "./App.css";

function App() {
  return (
    <RecipeState>
      <div className="App">
        <Navbar />
        <Home />
        <Footer />
      </div>
    </RecipeState>
  );
}

export default App;
