import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Credit_page from "./components/credit";
import Debit_page from "./components/debit";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          Hello
          <Credit_page />
          <Debit_page />
        </div>
      </Router>
    );
  }
}
