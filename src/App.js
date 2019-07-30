import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Credit_page from "./components/credit";
import Debit_page from "./components/debit";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" Component={Home} />
        </Switch>
        <Debit_page />
        {/* <Credit_page /> */}
      </Router>
    );
  }
}
