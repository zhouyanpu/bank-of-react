import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component{
    render(){
        return(
            <div>
                <img src= "https://code.fb.com/wp-content/uploads/2016/02/gev5wqc6bdmxibegag-eayeaaaaabj0jaaab.jpg" alt= "bank"/>
                <h1>Bank of React</h1>
                <p> Debit Total: {this.props.debits}</p>
                <p> Credits Total: {this.props.credits}</p>
                <Link to="/userProfile">User Profile</Link>
                <Link to="/debit"> Debit</Link>
                <Link to="/credit"> Credit</Link>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        )
    }
}

export default Home;