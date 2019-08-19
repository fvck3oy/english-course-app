import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'
import './login.css'
import { ToastContainer, toast } from 'react-toastify'
import auth from '../../service/index'
import styled from 'styled-components'
const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`
export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			password: '',
			invalidpassword: false,
			invalidemail: false,
			message: ''
		}
	}

	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
		this.setState({ message: '' })
		console.log({ [name]: value })
	}
	handleSubmit = e => {
		try {
			e.preventDefault()
			const data = {
				email: this.state.email,
				password: this.state.password
			}

			if (this.state.email && this.state.password) {
				axios.post('http://localhost:3001/english-course-api/users/login', data).then($res => {
					const { data } = $res
					this.setState({ message: data.message })
					if (data.message !== 'Email or Password Invalid' && data.message !== 'Invalid password' && data.message !== 'Email not found') {
						console.log('welcome')
						localStorage.setItem('token', data.token)
						this.props.history.push(`/overview`)
						// this.props.onUserChanged($res)
					} else {
						toast.error(this.state.message, {
							position: toast.POSITION.TOP_RIGHT
						})
					}
				})
			} else {
				console.log('cant login.')
			}
		} catch (error) {
			console.error('on error ->', error)
		}
	}

	render() {
		const { email, password } = this.state
		return (
			<Container>
				<Row className="">
					<Col md={12}>
				<h1 className="mb-2">SignIn</h1>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup>
								<Label for="exampleEmail">Email</Label>
								<Input
									type="email"
									name="email"
									id="exampleEmail"
									placeholder="example@hotmail.com"
									onChange={this.handleInputChange}
									value={email}
									required
								/>
							</FormGroup>
							<FormGroup>
								<Label for="examplePassword">Password</Label>
								<Input
									type="password"
									name="password"
									id="examplePassword"
									placeholder="password !"
									onChange={this.handleInputChange}
									value={password}
									required
								/>
							</FormGroup>
							<Button color="submit" size="lg" block>
								SignIn
							</Button>
							<ToastContainer />
						</Form>
						<div>
							<Link to={`/forgotpass`} style={{ textDecoration: 'none', fontSize: '18px', marginTop: '5px' }}>
								Forgot password?
							</Link>
						</div>
						<div>
							<Link to={`/register`} style={{ textDecoration: 'none', fontSize: '18px' }}>
								Register!
							</Link>
						</div>
					</Col>
				</Row>
			</Container>
		)
	}
}
