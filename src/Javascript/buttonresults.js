import React from "react";
import { Button, Image, Container, Row, Col} from '../../node_modules/react-bootstrap';
import "../CSS/buttonresults.css";
import community_garden from "../Images/ButtonImages/community_garden.png";
import food from "../Images/ButtonImages/food.png";
import emergency_food from "../Images/ButtonImages/emergency_food.png";
import food_delivery from "../Images/ButtonImages/food_delivery.png";
import benefit from "../Images/ButtonImages/benefit.png";
import nutrition from "../Images/ButtonImages/nutrition.png";
import money from "../Images/ButtonImages/money.png";
import see_all from "../Images/ButtonImages/see_all.png";
import phone from "../Images/ButtonImages/phone.png";

export default class buttonresults extends React.Component{
   render (){
      return (
         <div id="parent">
            <div id="main-component-btn-results">
               <h1 id="help_text">You chose Food. Can we narrow the resources down further for you?</h1>
               <Container id="button-grid" class ="centered">
                  <Row>
                     <Col id="col"><Button size="lg" href = '/CategoryResults' id="navbar-button" variant="outline-dark" font-size="100%"><Image src={community_garden} height="30%" width="20%" /><h1 id='btn-text'>Community Gardens</h1></Button></Col>
                     <Col id="col"><Button href = '/CategoryResults' id="navbar-button" variant="outline-dark"><Image src={emergency_food} height="30%" width="20%" /><h1 id='btn-text'>Emergency Food</h1></Button></Col>
                     <Col id="col"><Button href = '/CategoryResults' id="navbar-button" variant="outline-dark"><Image src={food_delivery} height="30%" width="20%" /><h1 id='btn-text'>Food Delivery</h1></Button></Col>
                  </Row>
                  <Row>
                     <Col id="col"><Button href = '/CategoryResults' id="navbar-button" variant="outline-dark"><Image src={food} height="30%" width="20%" /><h1 id='btn-text'>Food Pantry</h1></Button></Col>
                     <Col id="col"><Button href = '/CategoryResults' id="navbar-button" variant="outline-dark"><Image src={money} height="30%" width="20%" /><h1 id='btn-text'>Free Meals</h1></Button></Col>
                     <Col id="col"><Button href = '/CategoryResults' id="navbar-button" variant="outline-dark"><Image src={money} height="30%" width="20%" /><h1 id='btn-text'>Help Pay for Food</h1></Button></Col>
                  </Row>
                  <Row>
                     <Col id="col"><Button href = '/CategoryResults' id="navbar-button" variant="outline-dark"><Image src={benefit} height="30%" width="20%" /><h1 id='btn-text'>Food Benefits</h1></Button></Col>
                     <Col id="col"><Button href = '/CategoryResults' id="navbar-button" variant="outline-dark"><Image src={nutrition} height="30%" width="20%" /><h1 id='btn-text'>Nutrition</h1></Button></Col>
                  </Row>
               </Container>
               <Button href = '/CategoryResults' height="50%" width="50%" variant="outline-dark" id="navbar-button-survey"><Image src={see_all} height="10%" width="10%" /><h1 id='btn-text'>See All Results</h1></Button>
               <Button href='./' id='br-back-button' variant='light'>Back</Button>
            </div>
            <div id="hotline-component">
               <div id="hotline-text">
                  <div id="wrapper">
                     <h1 class="hotline-titles"><Image src={phone} height="30px" width="30px" />Emergency</h1>
                     <h2 class="hotline-numbers">911</h2>
                  </div>
                  <div id="wrapper">
                     <h1 class="hotline-titles"><Image src={phone} height="30px" width="30px" />Suicide Hotline</h1>
                     <h2 class="hotline-numbers">1-800-273-8255</h2>
                  </div>
                  <div id="wrapper">
                     <h1 class="hotline-titles"><Image src={phone} height="30px" width="30px" />Domestic Violence Hotline</h1>
                     <h2 class="hotline-numbers">1−800−799−7233</h2>
                  </div>
               </div>
            </div>
         </div>
      );
   }
};