import React from 'react';
import { Navbar, Nav, Button } from '../../node_modules/react-bootstrap';
import "../CSS/exitbutton.css";

class exitbutton extends React.Component{
   render(){
      return (
         <Nav className="exit_button" id="flash-button" className="center">
         <Button id="flash-button" className ="center" href="https://www.google.com"><Navbar.Text id="button-exit-text">Exit Now</Navbar.Text><Navbar.Text id="button-description">Click this button to quickly go to Google.com</Navbar.Text></Button>
         </Nav>
      );
   }
};

export default exitbutton;