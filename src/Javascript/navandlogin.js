import React from "react";
import {
	Button,
	Image,
	Container,
	Row,
	Col,
	Form,
	Modal,
   ButtonToolbar,
   Nav,
   Navbar
} from "../../node_modules/react-bootstrap";
import "../CSS/loginpage.css";
import "../CSS/navbar.css";
import Navbar from './navbar';
import logo from "../Images/Logo.png";

export default class Loginpage extends React.Component {
	constructor(props) {
		super(props);
	}

	MyVerticallyCenteredModal(props) {
		return (
			<Modal
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Modal heading
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Centered Modal</h4>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}

	render() {
		return (
			<div id="login-page">
				<div id="main-component-login">
					<Container id="organization-login" class="centered">
						<Row>
							<Col>
								<h1 class="aligncenter">Organization Login</h1>
							</Col>
							<Col>
								<p class="alignright">
									Here by mistake?
									<br></br>
									<Button href="/" size="sm" variant="dark">
										Back
									</Button>
								</p>
							</Col>
						</Row>
					</Container>
				</div>
				<div id="login-form">
					<Container id="login-container" class="centered">
						<Row>
							<Col md={{ span: 4, offset: 1 }}>
								<Form>
									<Form.Group controlId="formBasicEmail">
										<Form.Label>Enter Username</Form.Label>
										<Form.Control type="username" placeholder="Username" />
										<ForgotUsername />
									</Form.Group>

									<Form.Group controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" placeholder="Password" />
										<ForgotPassword />
									</Form.Group>
									<Button variant="outline-primary" type="submit" href="/" onClick={Navbar.handleLoggedIn()}>
										Submit
									</Button>
								</Form>
							</Col>
							<Col md={{ offset: 1 }}>I am here</Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}

function UsernameModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Username Recovery
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Container id="username-recovery-modal">
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label inline>Enter Email used for Organization</Form.Label>
							<Form.Control inline type="username" placeholder="Email Adress" />
						</Form.Group>
					</Form>
				</Container>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

function PasswordModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					Password Recovery
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>
					Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
					dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
					consectetur ac, vestibulum at eros.
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

function ForgotUsername() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<ButtonToolbar>
			<Button
				variant="outline-info"
				size="sm"
				onClick={() => setModalShow(true)}
			>
				Forgot Username?
			</Button>

			<UsernameModal show={modalShow} onHide={() => setModalShow(false)} />
		</ButtonToolbar>
	);
}

function ForgotPassword() {
	const [modalShow, setModalShow] = React.useState(false);

	return (
		<ButtonToolbar>
			<Button
				variant="outline-info"
				size="sm"
				onClick={() => setModalShow(true)}
			>
				Forgot Password?
			</Button>

			<PasswordModal show={modalShow} onHide={() => setModalShow(false)} />
		</ButtonToolbar>
	);
}


export default class nav extends React.Component {
   constructor (props){
      super(props);
      this.state = {mode: 'loggedOut'};
      this.login_button = (
         <div><Navbar.Text id="organization-text">Organization</Navbar.Text>
         <Button
            id="login-button"
            href="./login"
            variant="outline-light"
            size="sm"
         >
            Login
         </Button></div>
      );
      this.logout_button = (
         <div><Navbar.Text id="organization-text">You are logged in:</Navbar.Text>
         <Button
            id="login-button"
            href="./login"
            variant="outline-light"
            size="sm"
         >
            Edit Organization Information
         </Button>
         <Button
            id="login-button"
            href="./login"
            variant="outline-light"
            size="sm"
            onClick={this.handleLoggedOut()}
         >
            Logout
         </Button></div>
      );

      this.handleLoggedIn = this.handleLoggedIn.bind(this);
      this.handleLoggedOut = this.handleLoggedOut.bind(this);

   }

   static handleLoggedIn(){
      this.setState({mode: 'loggedIn'});
   }

   static handleLoggedOut(){
      this.setState({mode: 'loggedOut'});
   }

   renderButtons(){
      if(this.state.mode === 'loggedIn'){
         return this.logout_button;
      }
      else {
         return this.login_button;
      }
   }



	render() {
		return (
         <div id="nav-div">
			<Navbar expand ='sm' id="navbackground" sticky="top">
				<Navbar.Brand href="/" id="logo" bsPrefix="Logo">
					<Image
						src={logo}
						href="#home"
						alt="AIR ASUM Information and Referral"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse>
					<Nav id="login-info" class="right">
						{this.renderButtons()}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
         </div>
		);
	}
}