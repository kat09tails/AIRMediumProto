import React from "react";
//import $ from 'jquery';

import { Navbar, Nav, Button, Image } from "../../node_modules/react-bootstrap";
import "../CSS/navbar.css";
import * as BCSS from "bootstrap/dist/css/bootstrap.css";
import * as BJS from "bootstrap/dist/js/bootstrap.js";
import logo from "../Images/Logo.png";

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

   handleLoggedIn(){
      this.setState({mode: 'loggedIn'});
   }

   handleLoggedOut(){
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

//export default nav;
