import React, { Component } from "react";
import GlobalStyle from "./globalStyle";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
          <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/" exact component={Home}/>
                <Route exact path="/contact" component={Contact}/>
            </Switch>
            <Footer/>
          </Router>
      </div>

    );
  }
}

export default App;
