import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import Header from '../header/header'
import Footer from '../footer/footer'
import PrivateRote from '../main/privateRoute'
export default class Main extends Component {
	render() {
		return (
			<div>
				{/* <Route exact path="/" render={props => <Login {...props} onUserChanged={this.props.onUserChanged}   />} /> */}
				{/* <Route exact path="/forgotpass" component={withRouter(ForgotPass)} />
				<Route exact path="/register" component={withRouter(Register)} />
				<Route exact path="/resetpassword/:token" component={withRouter(ResetPassword)} /> */}{' '}
				<Header />
				<PrivateRote />
				<Footer />
			</div>
		)
	}
}
