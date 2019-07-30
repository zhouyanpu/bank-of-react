import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home';
import UserProfile from './Components/UserProfile';
import LogIn from './Components/Login';
import Debit_page from './Components/debit';
import Credit_page from './Components/credit';

class App extends Component {

  constructor() {
    super();

    this.state = {
	  accountBalance: 14568.27,
	  debitBalance: 4255.99,
	  CreditBalance: 1998.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} debits={this.state.debitBalance} credits={this.state.CreditBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}  />
	);
	const mockLogIn = (logInInfo) => {
		const newUser = {...this.state.currentUser};
		newUser.userName = logInInfo.userName;
		this.setState({currentUser: newUser});
	}
	const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={mockLogIn} {...this.props}/>);
	const DebitComponent = () => (<Debit_page debitBalance={this.state.debitBalance} accountBalance={this.state.accountBalance}/>);
	const CreditComponent = () => (<Credit_page creditBalance={this.state.creditBalance} accountBalance={this.state.accountBalance}/>);
	


    return (
        <Router basename = "/Bank-of-React">
          <div>	
		  	<Route exact path="/login" render={LogInComponent}/>	  	
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
			<Route exact path="/debit" render={Debit_page}/>
			<Route exact path="/credit" render={Credit_page }/>
          </div>
        </Router>
    );
  }

}

export default App;