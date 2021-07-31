import React, { Component } from "react";
import GlobalStyle from "./globalStyle";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home"
import Footer from "./Components/Footer";
import MyWorks from "./pages/MyWorks";
import Experiences from "./pages/Experiences";
import SinglePost from "./pages/SinglePost";


class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle/>
          <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/myexperiences" component={Experiences}/>
                <Route path="/myworks/:slug" component={SinglePost}/>
                <Route path="/myworks" component={MyWorks}/>
            </Switch>
            <Footer/>
          </BrowserRouter>
      </div>

    );
  }
}

export default App;
