import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import { Home, Test } from "./components/views";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/App.scss";
// logo
import logo from "./assets/logo/logo-color.svg";
const App = () => (
  <div className="App">
    <Router>
      <Header logo={logo} />
      <Route exact path="/" component={Home} />
      <Route path="/test" component={Test} />
      <Footer />
    </Router>
  </div>
);

export default App;
