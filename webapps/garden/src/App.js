import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Intro from "./routes/Intro";
import Home from "./routes/Home";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Header/>
        <Switch>
          <Route exact={true} path="/" component={Intro} />
          <Route path="/home/:page" component={Home} />
          <Redirect from="*" to="/home/1"/>
        </Switch>
        <Footer/>
      </Router>
    );
  }
}