import React from 'react';
import { Row, Col, Image, Button, Jumbotron } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion'
import SurveyResultSection from './SurveyResultSection.js'
import SurveyResult from './SurveyResult'
import './ComponentStyle.css'



function CategoryResultsPage() {
  return (
    <div>
      <Jumbotron>
        <h4>[Category] Results: </h4>
        <Button id="printSaveShare"><h6>Print / Save / Share</h6></Button>
      </Jumbotron>
      <SurveyResult />
      <br />
      <SurveyResult />
      <br />
      <SurveyResult />
      <br />
      <SurveyResult />
      <br />
      <SurveyResult />
      <br />
      <SurveyResult />
      <br />
      <SurveyResult />
      <br />
      <SurveyResult />
      <br />
      <SurveyResult />
    </div>
  )
}

export default CategoryResultsPage;
