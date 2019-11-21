import React from "react"
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';
import "./ComponentStyle.css"
import ResultMoreInfoBody from './ResultMoreInfoBody'

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <div>
      <div>
        <h5 style = {{float: "left"}}>Agency Name Here : WWW.Website.com</h5>
      </div>
      <div>
        <button
          type="button"
          style={{ backgroundColor: 'blue'}, {float: "right"}}
          onClick={decoratedOnClick}
        >
          {children}
        </button>
      </div>
    </div>
  );
}

function SurveyResult() {
  return (
    <div>
      <Accordion>
        <Card>
          <Card.Header>
            <CustomToggle eventKey="0">Show More</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <ResultMoreInfoBody />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default SurveyResult
