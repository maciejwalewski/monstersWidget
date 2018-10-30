import React, { Component } from "react";
import { Provider } from "react-redux";
import { 
  createStore, 
  applyMiddleware 
} from "redux";
import { createLogger } from "redux-logger";
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";
import thunk from "redux-thunk";

import styles from "../stylesheet.scss";

import cReducers from "@/data/reducers";

import { MainPage } from "./MainPage";

const store = createStore(cReducers, applyMiddleware(thunk, createLogger()));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}
