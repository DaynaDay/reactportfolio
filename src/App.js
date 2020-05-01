import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/NavBar";
import About from "./pages/About";
import ContactForm from "./pages/Contact";


function App() {
  return (
    <div className="container">
    <Navbar />
    <Jumbotron />
    <Router>
    <Route exact path="/" component={About} />
    <Route exact path="/contact" component={ContactForm} />
    </Router>
</div>
  );
}

export default App;
