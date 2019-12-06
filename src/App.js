// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import EventListContainer from "./components/EventListContainer";
import EventDetailsContainer from "./components/EventDetailsContainer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="mainpart">
          <Route path="/" exact component={EventListContainer} />
          <Route path="/event/:id" component={EventDetailsContainer} />
        </div>
      </Provider>
    );
  }
}

export default App;
