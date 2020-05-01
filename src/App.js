import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/NavBar";
import About from "./pages/About";


function App() {
  return (
    <div className="container">
    <Navbar />
    <Jumbotron />
    <Router>
    <Route exact path="/" component={About} />
    </Router>
</div>
  );
}

export default App;
