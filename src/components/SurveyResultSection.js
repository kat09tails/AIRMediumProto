import React from "react"
import SurveyResult from "./SurveyResult"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import "./ComponentStyle.css"


class SurveyResultSection extends React.Component{
  render(){
    return(
      <Card>
        <h3 class = "centered">Assistance Category</h3>
        <SurveyResult />
        <SurveyResult />
        <SurveyResult />
        <SurveyResult />
        <Button id="viewAllButton">View all for this Category</Button>
      </Card>
    )
  }
}






export default SurveyResultSection
