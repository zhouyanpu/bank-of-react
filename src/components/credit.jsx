import "./credit.css";
import axios from "axios";
import React, { Component } from "react";
import Infobox from "./infoBox";

class CreditPage extends Component {
  state = { data: [], total: 0, des: "", amo: "", key: 666 };

  componentDidMount = async () => {
    const res = await axios.get("https://moj-api.herokuapp.com/credits");
    await this.setState({ data: res.data });
    let sum = 0;
    for (let i = 0; i < this.state.data.length; i++) {
      sum += this.state.data[i].amount; // ?? 怎么await for
    }
    await this.setState({ total: sum });
    console.log(this.state.total);
  };
  desChange = async ev => {
    await this.setState({ des: ev.target.value });
    console.log(this.state.des);
  };
  amoChange = async ev => {
    await this.setState({ amo: parseFloat(ev.target.value) });
    console.log(this.state.amo);
  };
  genkey = () => {
    this.state.key++;
    return this.state.key;
  };
  addcredit = async ev => {
    // console.log(typeof this.state.des);
    if (this.state.amo && this.state.des) {
      this.state.data.push({
        amount: this.state.amo,
        description: this.state.des,
        date: "2019-07-30T11:30:06.921Z",
        id: this.genkey()
      });
      await this.setState({ data: this.state.data });
    }
    // console.log(this.state.data[3]);
  };

  render() {
    return (
      <div className="whole">
        <h1>Credit</h1>
        <h3>Account Balance: </h3>
        <h3>Total Credits: {this.state.total}</h3>
        {/* <Inputbar change={this.updateZip} search={this.search} /> */}

        <div className="disbox">
          {/* {this.state.invalid && <h2>Invalid zip</h2>} */}
          {this.state.data.length > 0 &&
            this.state.data.map(ct => <Infobox key={ct.id} credit={ct} />)}
        </div>
        <div className="inputbox">
          <h6>Credit Description</h6>
          <input onChange={this.desChange} type="text" />
          <h6>Credit Amount</h6>
          <input onChange={this.amoChange} type="text" />
          <div>
            <button onClick={this.addcredit}>Add Credit</button>
            {/* 怎么视角自动跟踪 ！！ */}
          </div>
        </div>
      </div>
    );
  }
}

export default CreditPage;
