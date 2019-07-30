import React, { Component } from "react";
import "./infoBox.css";

class Infobox extends Component {
  state = {};
  render() {
    return (
      <div className="boxbody">
        <div className="info">{this.props.credit.description}</div>
        <div className="info">Amount: {this.props.credit.amount}</div>
        <div className="info">Date: {this.props.credit.date}</div>
        {/* <div className="info">Total Wages: ~{this.props.city.TotalWages}</div> */}
      </div>
    );
  }
}

export default Infobox;
