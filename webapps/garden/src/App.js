import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';


import Intro from "./components/Intro";
import MainPage from "./components/main/MainPage";
import configureStore from "./store/configureStore";

export default class App extends React.Component {
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <Router>
          <Switch>
            <Route exact={ true } path="/" component={ Intro } />
            <Route path="/main/:page" component={ MainPage } />
            <Redirect from="*" to="/main/1"/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}