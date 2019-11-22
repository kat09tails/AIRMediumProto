import React from "react";
import { Button, Image, Container, Row, Col} from '../../node_modules/react-bootstrap';
import "../CSS/loginpage.css";

class Loginpage extends React.Component{
   render (){
      return (
         <div id="parent">
            <div>
                <p class = "aligncenter">Organization Login
                    <p class = "alignright">Here by mistake?
                        <br></br>
                        <button type = "button" class = "btn btn-primary btn-sm">
                            Back
                        </button>
                    </p>
                </p>
            </div>
            <div>
                
            </div>
         </div>
      );
   }
};

export default Loginpage;