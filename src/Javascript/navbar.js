import React from 'react';
//import $ from 'jquery';

import { Navbar, Nav, Button, Image } from '../../node_modules/react-bootstrap';
import '../CSS/navbar.css'
import * as BCSS from 'bootstrap/dist/css/bootstrap.css';
import * as BJS from 'bootstrap/dist/js/bootstrap.js';
import logo from '../Images/Logo.png';



class nav extends React.Component {
   
   render() {
      return(
     <Navbar expand="xl" id ="navbackground">
      
      <Navbar.Brand href="#home" id='logo' bsPrefix="Logo"><Image src={logo} href="#home" alt="AIR ASUM Information and Referral" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" height='20px'>
         <Nav id="login-info" class="right">
            <Navbar.Text id="organization-text">Organization</Navbar.Text>
            <Button id="login-button" variant="outline-light" size="sm" href='#'>Login</Button>
         </Nav>
         
      </Navbar.Collapse>
     </Navbar>
   );
   }
};

 export default nav;