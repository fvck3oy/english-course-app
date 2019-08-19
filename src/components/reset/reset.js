import React, { Component } from 'react'
import { Form, Button } from 'reactstrap'
import { ToastContainer, toast } from 'react-toastify'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: white;
`

export default class ResetPassword extends Component {
	constructor(props) {
		super(props)
		this.state = {
			token: '',
			fpass: '',
			spass: '',
			massage: ''
		}
	}

	submit = e => {
		e.preventDefault()
		try {
			const data = {
				resetToken: this.state.token,
				password: this.state.spass
			}
			if (this.state.fpass.length > 5 && this.state.spass.length > 5) {
				if (this.state.fpass === this.state.spass) {
					axios.post('http://localhost:3001/english-course-api/users/resetpass', data).then($res => {
						const { data } = $res
						this.setState({ message: data.message })
						if (data.message !== 'Token not found or expired!') {
							this.props.history.push(`/`)
						} else {
              toast.error(this.state.message, {
                position: toast.POSITION.TOP_RIGHT
              })
							this.setState({ massage: 'Token expired!' })
						}
					})
				} else {
          toast.error(this.state.message, {
            position: toast.POSITION.TOP_RIGHT
          })
					this.setState({ massage: 'Please fill in the same password' })
				}
			} else {
        toast.error(this.state.message, {
          position: toast.POSITION.TOP_RIGHT
        })
				this.setState({
          
        
					massage: 'Password should contain at least 6 characters'
				})
			}
		} catch (error) {}
	}

	handleInputChange = e => {
		const { name, value } = e.target
		this.setState({ [name]: value })
		this.setState({ massage: '' })
		console.log({ [name]: value })
	}

	componentDidMount = () => {
		if (this.props.match.params.token) {
			this.setState({ token: this.props.match.params.token })
		}
	}
	render() {
		return (
			<Container>
				<div className="resetblock">

					<br />
					<div style={{ fontSize: '30px', lineHeight: '0', color: '#4a4a4a', marginTop: '15px' }}>Reset Password?</div> <br />
					<div className="please">Please enter your new password</div>
					<Form onSubmit={this.submit}>
						<div className="ipp">
							<input
								style={{ fontSize: '8px !important' }}
								name="fpass"
								type="password"
								className="inputform"
								placeholder="New Password"
								onChange={this.handleInputChange}
								value={this.state.fpass}
							/>
						</div>
						<div className="ipp">
							<input
								style={{ fontSize: '8px !important' }}
								name="spass"
								type="password"
								className="inputform"
								placeholder="Confirm Password"
								onChange={this.handleInputChange}
								value={this.state.spass}
							/>
						</div>
						<Button color="submit" size="lg" block>
							Submit
						</Button>
					</Form>

				</div>
        <ToastContainer />
			</Container>
		)
	}
}