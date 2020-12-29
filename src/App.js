import React, { useEffect } from "react";
import Navbar from "../src/layout/components/Navbar";
import Home from "../src/pages/Home";
import Footer from "./layout/components/Footer";
import RecipeState from "../src/context/recipe/RecipeState";
import "materialize-css/dist/css/materialize.min.css";
import { gsap } from "gsap";
import "./App.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  M.AutoInit();

  useEffect(() => {
    gsap.from(".App", {
      opacity: 0,
      duration: 0.7,
    });
  });

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
