import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './CSS/index.css';
import Navbar from './Javascript/navbar';
import ExitButton from './Javascript/exitbutton';
import Homepage from './Javascript/homepage';
import Loginpage from './Javascript/loginpage';

// const my_nav = Navbar;
// const my_footer = ExitButton;

// class NavAndFoot extends React.Component {
//    render() {
//       return(
//         {my_nav},
//         {ExitButton}
//       );
//    }
//  };

//ReactDOM.render(<Navbar />, document.getElementById('root'));
ReactDOM.render(<div><Navbar />, <Loginpage /> </div>, document.getElementById('root'));