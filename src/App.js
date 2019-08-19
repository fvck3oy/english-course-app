import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import Action from './actions'
import Counter from './components/counter'
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'
import Main from './components/main/mainRoute'
import Register from './components/register/register'
import Login from './components/login/login'
import ForgotPass from './components/forgot/forgot'
import ResetPassword from './components/reset/reset'

class App extends Component {
	render() {

		return (
			<div>
				<Router>

					<Switch>
						<Route exact path="/" component={withRouter(Login)} />
						<Route exact path="/forgotpass" component={withRouter(ForgotPass)} />
						<Route exact path="/register" component={withRouter(Register)} />
						<Route exact path="/resetpassword/:token" component={withRouter(ResetPassword)} />
						<Main />
						{/* <Counter value={this.props.counter} onIncrement={() => this.props.increment()} onDecrement={() => this.props.decrement()} /> */}
					</Switch>
					
				</Router>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	counter: state.counter
})

const mapDispatchToProps = dispatch => ({
	increment: () => dispatch({ type: Action.INCREMENT, text: 'INCREMENT Redux' }),
	decrement: () => dispatch({ type: Action.DECREMENT, text: 'DECREMENT Redux' })
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
