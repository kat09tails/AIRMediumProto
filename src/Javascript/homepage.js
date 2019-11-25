import React from "react";
import {
	Button,
	Image,
	Container,
	Row,
	Col
} from "../../node_modules/react-bootstrap";
import "../CSS/homepage.css";
import emergency from "../Images/ButtonImages/emergency.png";
import food from "../Images/ButtonImages/food.png";
import housing from "../Images/ButtonImages/housing.png";
import goods from "../Images/ButtonImages/goods.png";
import transit from "../Images/ButtonImages/transit.png";
import health from "../Images/ButtonImages/health.png";
import money from "../Images/ButtonImages/money.png";
import care from "../Images/ButtonImages/care.png";
import education from "../Images/ButtonImages/education.png";
import work from "../Images/ButtonImages/work.png";
import legal from "../Images/ButtonImages/legal.png";
import survey from "../Images/ButtonImages/survey.png";
import phone from "../Images/ButtonImages/phone.png";
import NavBar from "./navbar";

export default class Homepage extends React.Component {
	render() {
		return (
			<div id="parent">
				<div id="main-component-home">
					<h1 id="help_text">What resources can we help you find?</h1>
					<Container id="button-grid" class="centered">
						<Row>
							<Col id="col">
								<Button
									size="lg"
									href="./buttonresults"
									id="navbar-button"
									variant="outline-dark"
									font-size="100%"
								>
									<Image src={emergency} height="50%" width="50%" />
									<h1 id="btn-text">Emergency</h1>
								</Button>
							</Col>
							<Col id="col">
								<Button
									href="./buttonresults"
									id="navbar-button"
									variant="outline-dark"
								>
									<Image src={food} height="50%" width="50%" />
									<h1 id="btn-text">Food</h1>
								</Button>
							</Col>
							<Col id="col">
								<Button
									href="./buttonresults"
									id="navbar-button"
									variant="outline-dark"
								>
									<Image src={housing} height="50%" width="50%" />
									<h1 id="btn-text">Housing</h1>
								</Button>
							</Col>
						</Row>
						<Row>
							<Col id="col">
								<Button
									href="./buttonresults"
									id="navbar-button"
									variant="outline-dark"
								>
									<Image src={goods} height="50%" width="50%" />
									<h1 id="btn-text">Goods</h1>
								</Button>
							</Col>
							<Col id="col">
								<Button
									href="./buttonresults"
									id="navbar-button"
									variant="outline-dark"
								>
									<Image src={transit} height="50%" width="50%" />
									<h1 id="btn-text">Transit</h1>
								</Button>
							</Col>
							<Col id="col">
								<Button
									href="./buttonresults"
									id="navbar-button"
									variant="outline-dark"
								>
									<Image src={health} height="50%" width="50%" />
									<h1 id="btn-text">Health</h1>
								</Button>
							</Col>
						</Row>
						<Row>
							<Col id="col">
								<Button
									href="./buttonresults"
									id="navbar-button"
									variant="outline-dark"
								>
									<Image src={money} height="50%" width="50%" />
									<h1 id="btn-text">Money</h1>
								</Button>
							</Col>
							<Col id="col">
								<Button
									href="./buttonresults"
									id="navbar-button"
									variant="outline-dark"
								>
									<Image src={care} height="50%" width="50%" />
									<h1 id="btn-text">Care</h1>
								</Button>
							</Col>
							<Col id="col">
								<Button
									href="./buttonresults"
									id="navbar-button"
									variant="outline-dark"
								>
									<Image src={education} height="50%" width="50%" />
									<h1 id="btn-text">Education</h1>
								</Button>
							</Col>
						</Row>
						<Row>
							<Col id="col">
								<Button
									href="./buttonresults"
									id="navbar-button"
									variant="outline-dark"
								>
									<Image src={work} height="40%" width="40%" />
									<h1 id="btn-text">Work</h1>
								</Button>
							</Col>
							<Col id="col">
								<Button
									href="./buttonresults"
									id="navbar-button"
									variant="outline-dark"
								>
									<Image src={legal} height="40%" width="40%" />
									<h1 id="btn-text">Legal</h1>
								</Button>
							</Col>
						</Row>
					</Container>
					<Button
						href="./survey"
						height="50%"
						width="50%"
						variant="outline-dark"
						id="navbar-button-survey"
					>
						<Image src={survey} height="10%" width="10%" />
						<h1 id="btn-text">Unsure? Click to take a survey.</h1>
					</Button>

					<div class="event-component">
						<table id="event-table">
							<tr>
								<th id="events-heading">Events</th>
							</tr>
							<div id="scrollable">
								<tr>
									<td>November 21, 2019</td>
								</tr>
								<td>Hot Meal</td>
								<tr>
									<td>- Poverello Center</td>
								</tr>
								<tr>
									<td>- Address:</td>
								</tr>
								<tr>
									<td>1110 W Broadway</td>
								</tr>
								<tr>
									<td>Missoula, MT 59802</td>
								</tr>
								<tr>
									<td>- Phone Number:</td>
								</tr>
								<tr>
									<td>xxx-xxx-xxxx</td>
								</tr>
							</div>
						</table>
					</div>
					<div id="white-space"></div>
				</div>
				<div id="hotline-component">
					<div id="hotline-text">
						<div id="wrapper">
							<h1 class="hotline-titles">
								<Image src={phone} height="30px" width="30px" />
								Emergency
							</h1>
							<h2 class="hotline-numbers">911</h2>
						</div>
						<div id="wrapper">
							<h1 class="hotline-titles">
								<Image src={phone} height="30px" width="30px" />
								Suicide Hotline
							</h1>
							<h2 class="hotline-numbers">1-800-273-8255</h2>
						</div>
						<div id="wrapper">
							<h1 class="hotline-titles">
								<Image src={phone} height="30px" width="30px" />
								Domestic Violence Hotline
							</h1>
							<h2 class="hotline-numbers">1−800−799−7233</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
