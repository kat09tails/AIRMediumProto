import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import $ from "jquery";
import "./CSS/index.css";
import Navbar from "./Javascript/navbar";
import ExitButton from "./Javascript/exitbutton";
import Homepage from "./Javascript/homepage";
import ButtonResults from "./Javascript/buttonresults";
import LoginPage from "./Javascript/loginpage";
import AddAgency from "./Javascript/addagency";
import EditAgency from "./components/AgencyEditPage";
import Survey from "./Javascript/survey";
import "bootstrap/dist/css/bootstrap.min.css";

const Notfound = () => <h1>Not found</h1>;

const routing = (
	<Router>
		<div>
			<Route
				exact
				path="*"
				component={() => (
					<div>
						<Navbar />
					</div>
				)}
			/>
			<Switch>
				<Route
					exact
					path="/"
					component={() => (
						<div>
							<Homepage />
							<ExitButton />
						</div>
					)}
				/>
				<Route
					path="/login"
					component={() => (
						<div>
							<LoginPage />
						</div>
					)}
				/>
				<Route
					path="/buttonresults"
					component={() => (
						<div>
							<ButtonResults />
							<ExitButton />
						</div>
					)}
				/>
				<Route
					path="/survey"
					component={() => (
						<div>
							<Survey />
							<ExitButton />
						</div>
					)}
				/>
				<Route
					path="/addagency"
					component={() => (
						<div>
							<AddAgency />
						</div>
					)}
				/>
				<Route
					path="/editagency"
					component={() => (
						<div>
							<EditAgency />
						</div>
					)}
				/>
				<Route
					exact
					path="*"
					component={() => (
						<div>
							<Homepage />
							<ExitButton />
						</div>
					)}
				/>

				<Route component={Notfound} />
			</Switch>
		</div>
	</Router>
);

ReactDOM.render(routing, document.getElementById("root"));
// ReactDOM.render(<div><Navbar /><Homepage /><ExitButton /> </div>, document.getElementById('root'));
