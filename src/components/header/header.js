import React, { Component } from 'react'
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap'
import { Link } from 'react-router-dom'
import './header.css'
import auth from '../../service/index'
export default class Header extends Component {
	constructor(props) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.state = {
			isOpen: false,
			check: '',
			dataUser: null
		}
	}

	// componentWillReceiveProps = nextProps => {
	// 	if (nextProps.user !== null) {
	// 		this.setState({ check: 'login' })
	// 		let user = auth.getToken()
	// 		let userDecoded = auth.decodeToken(user)
	// 	}
	// }
	componentDidMount = () => {}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	logout = e => {
		auth.clearToken()
	}
	render() {
		return (
			<div>
				<Navbar dark expand="md">
					<NavLink to="/" className="link-to" style={{ color: '#fff' }}>
						{' '}
						English Course
					</NavLink>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{/* <NavItem>
								<Link to="/overview" className="link-to">
									Home
								</Link>
							</NavItem> */}
							{/* {this.state.check !== 'login' && (
								<NavItem>
									<Link to="/" className="link-to">
										SignIn
									</Link>
								</NavItem>
							)}

							{this.state.check === 'login' && (
								<NavItem>
									<Link to="/" className="link-to" onClick={this.logout}>
										SignOut
									</Link>
								</NavItem>
							)} */}
							<NavItem>
								<Link to="/" className="link-to" onClick={this.logout}>
									SignOut
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		)
	}
}
