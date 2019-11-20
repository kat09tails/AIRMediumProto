import React from "react";
import { Button, Image, Container, Row, Col} from '../../node_modules/react-bootstrap';
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

class Homepage extends React.Component{
   render (){
      return (
         <div>
            <div id="main-component">
               <Button height="50px" width="50px" variant="outline-dark" id="navbar-button-survey"><Image src={survey} height="50px" width="50px" /><h1>Unsure, click to take a survey</h1></Button>
               <Container id="button-grid">
                  <Row>
                     <Col><Button id="navbar-button" variant="outline-dark"><Image src={emergency} height="50px" width="50px" /><h1>Emergency</h1></Button></Col>
                     <Col><Button id="navbar-button" variant="outline-dark"><Image src={food} height="50px" width="50px" /><h1>Food</h1></Button></Col>
                     <Col><Button id="navbar-button" variant="outline-dark"><Image src={housing} height="50px" width="50px" /><h1>Housing</h1></Button></Col>
                  </Row>
                  <Row>
                     <Col><Button id="navbar-button" variant="outline-dark"><Image src={goods} height="50px" width="50px" /><h1>Goods</h1></Button></Col>
                     <Col><Button id="navbar-button" variant="outline-dark"><Image src={transit} height="50px" width="50px" /><h1>Transit</h1></Button></Col>
                     <Col><Button id="navbar-button" variant="outline-dark"><Image src={health} height="50px" width="50px" /><h1>Health</h1></Button></Col>
                  </Row>
                  <Row>
                     <Col><Button id="navbar-button" variant="outline-dark"><Image src={money} height="50px" width="50px" /><h1>Money</h1></Button></Col>
                     <Col><Button id="navbar-button" variant="outline-dark"><Image src={care} height="50px" width="50px" /><h1>Care</h1></Button></Col>
                     <Col><Button id="navbar-button" variant="outline-dark"><Image src={education} height="50px" width="50px" /><h1>Education</h1></Button></Col>
                  </Row>
                  <Row>
                     <Col><Button id="navbar-button" variant="outline-dark"><Image src={work} height="50px" width="50px" /><h1>Work</h1></Button></Col>
                     <Col><Button id="navbar-button" variant="outline-dark"><Image src={legal} height="50px" width="50px" /><h1>Legal</h1></Button></Col>
                  </Row>
               </Container>
               

               <div className="event-component">

               </div>
            </div>
            <div id="hotline-component">
               <div id="hotline-text">
                  <Image src={phone} height="50px" width="50px" />
                  <h1 class="hotline-titles">Emergency</h1>
                  <h2 class="hotline-numbers">911</h2>
                  <h1 class="hotline-titles">Suicide Hotline</h1>
                  <h2 class="hotline-numbers">1-800-273-8255</h2>
                  <h1 class="hotline-titles">Domestic Violence Hotline</h1>
                  <h2 class="hotline-numbers">1−800−799−7233</h2>
               </div>
            </div>
         </div>
      );
   }
};

export default Homepage;