import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './CSS/index.css';
import Navbar from './Javascript/navbar';
import ExitButton from './Javascript/exitbutton';
import Homepage from './Javascript/homepage';
import ButtonResults from './Javascript/buttonresults';
import LoginPage from './Javascript/loginpage';


const Notfound = () => <h1>Not found</h1>;

const routing = (
   <Router>
      <div>
         <Switch>
            <Route exact path= "/" component= {()=>(<div><Navbar/><Homepage/><ExitButton /></div>)} />
            <Route path= "/buttonresults" component = {()=>(<div><Navbar/><ButtonResults/></div>)} />
            <Route path= "/login" component = {()=>(<div><Navbar/><LoginPage/></div>)} />
            <Route exact path= "*" component= {()=>(<div><Navbar/><Homepage/><ExitButton /></div>)} />
            <Route component={Notfound} />
         </Switch>
      </div>
   </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<div><Navbar /><Homepage /><ExitButton /> </div>, document.getElementById('root'));
