import React, {Component} from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <img src= "https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt= "bank"/>
                <h1>Bank of React</h1>
                <p> Debit Total: {this.props.debits}</p>
                <p> Credits Total: {this.props.credits}</p>
                <AccountBalance accountBalance={this.props.accountBalance}/>
            </div>
        )
    }
}

export default Home;