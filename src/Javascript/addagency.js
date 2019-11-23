import React from "react";
import {
	Button,
	Image,
	Container,
	Row,
	Col,
	Form,
	Modal,
	ButtonToolbar
} from "../../node_modules/react-bootstrap";
import "../CSS/addagency.css";

export default class AddAgency extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="add-agency-page">
				<div id="main-component-add-agency"></div>
			</div>
		);
	}
}
