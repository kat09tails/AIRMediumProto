import React from "react";
import $ from "jquery";

import { Navbar, Nav, Button, Image } from "react-bootstrap";
import "../CSS/navbar.css";
import * as BCSS from "bootstrap/dist/css/bootstrap.css";
import * as BJS from "bootstrap/dist/js/bootstrap.js";
import logo from "../Images/Logo.png";
import { toggleClass } from "dom-helpers";

export default class nav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			active: false
		};
	}

	showButtons() {
		$("#add-agency-button").removeClass("disabled");
		$("#edit-agency-button").removeClass("disabled");
		//document.getElementById("add-agency-button").removeAttribute("disabled");
		//document.getElementById("add-agency-button").setAttribute("active", "true");
	}

	render() {
		return (
			<Navbar expand="lg" id="navbackground">
				<script></script>
				<Navbar.Brand href="/" id="logo" bsPrefix="Logo">
					<Image src={logo} href="/" alt="AIR ASUM Information and Referral" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" height="20px">
					<Nav id="login-info" class="right">
						<Button
							id="add-agency-button"
							href="./addagency"
							variant="outline-light"
							size="sm"
							disabled
						>
							Add Agency
						</Button>
						<Button
							id="edit-agency-button"
							href="./addagency"
							variant="outline-light"
							size="sm"
							disabled
						>
							Edit Agency
						</Button>
						<Button
							id="login-button"
							variant="outline-light"
							size="sm"
							onClick={this.showButtons}
						>
							Click to enable buttons
						</Button>
						<Button
							id="login-button"
							href="./login"
							variant="outline-light"
							size="sm"
						>
							Organization Login
						</Button>
						<Button
							id="logout-button"
							href="./login"
							variant="outline-light"
							size="sm"
							disabled="true"
						>
							Logout
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

function showButtons() {
	document.getElementById("add-agency-button").removeAttribute("disabled");
	document.getElementById("add-agency-button").setAttribute("active", "true");
}

//export default nav;
