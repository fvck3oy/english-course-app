import React, { Component } from 'react'
import PrivateRoute from '../privateRoute/index'
import Overview from '../overview/overview'
export default class privateRoute extends Component {
	render() {
		return (
			<div>
				<PrivateRoute exact path="/overview" component={Overview} />
				<PrivateRoute exact path="/overview" component={Overview} />
			</div>
		)
	}
}
