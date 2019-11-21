import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import $ from 'jquery';
import './CSS/index.css';
import Navbar from './Javascript/navbar'
import ExitButton from './Javascript/exitbutton'
import Homepage from './Javascript/homepage'
import ButtonResults from './Javascript/buttonresults'

const routing = (
   <Router>
      <div>
         <Route exact path= "/" component= {Navbar} />
         <Route exact path= "/" component= {ExitButton} />
         <Route exact path= "/" component= {Homepage} />
         <Route path= "/buttonresults" component = {ButtonResults} />
      </div>
   </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
// ReactDOM.render(<div><Navbar /><Homepage /><ExitButton /> </div>, document.getElementById('root'));