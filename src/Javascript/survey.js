import React from "react";
import { Table, Button } from "react-bootstrap";

const isContinuing = false;

const survey1 = ( 
   <div>
      <Table>
         <thead>
            <tr>
               <th>
                  Questions
               </th>
               <th>
                  Please check the box if the question applies to you.
               </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>
                  Are you a United States Veteran? 
               </td>
               <td>
                  If Yes: <input type="checkbox" name="veteran" value="yes" />
               </td>
            </tr>
            <tr>
               <td>
                  Do you have children? 
               </td>
               <td>
                  If Yes: <input type="checkbox" name="children" value="yes" />
               </td>
            </tr>
            <tr>
               <td>
                  Are you married? 
               </td>
               <td>
                  If Yes: <input type="checkbox" name="married" value="yes" />
               </td>
            </tr>
            <tr>
               <td>
                  Are you renting or do you currently own a home? 
               </td>
               <td>
                  If Yes: <input type="checkbox" name="renter/homeowner" value="yes" />
               </td>
            </tr>
            <tr>
               <td>
                  Have you gone hungry more than 2 nights of the week? 
               </td>
               <td>
                  If Yes: <input type="checkbox" name="hungry" value="yes" />
               </td>
            </tr>
         </tbody>

      </Table>

   </div> );

const survey2 = ( 
   <div>
      <Table>
         <thead>
            <tr>
               <th>
                  Questions
               </th>
               <th>
                  Please check the box if the question applies to you.
               </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>
                  Have you slept on the streets? 
               </td>
               <td>
                  If Yes: <input type="checkbox" name="housing" value="yes" />
               </td>
            </tr>
            <tr>
               <td>
                  Have you had to skip a meal because you had to pay rent? 
               </td>
               <td>
                  If Yes: <input type="checkbox" name="housing" value="yes" />
               </td>
            </tr>
            <tr>
               <td>
                  Do you have enough income for food? 
               </td>
               <td>
                  If Yes: <input type="checkbox" name="married" value="yes" />
               </td>
            </tr>
            <tr>
               <td>
                  Do you have to reduce the amount of food that you eat because you cannot afford to eat more? 
               </td>
               <td>
                  If Yes: <input type="checkbox" name="renter/homeowner" value="yes" />
               </td>
            </tr>
            <tr>
               <td>
                  Have you had to couch surf in order to keep a roof over your head? 
               </td>
               <td>
                  If Yes: <input type="checkbox" name="hungry" value="yes" />
               </td>
            </tr>
         </tbody>

      </Table>

   </div> );

const survey1_buttons = (
   <div>
      <Button>Continue</Button>
      <Button href="/">Exit</Button>
   </div>
);

const survey2_buttons = (
   <div>
      <Button>Previous</Button>
      <Button>See Results</Button>
      <Button href="/">Back</Button>
   </div>
);



export default class Survey extends React.Component {
   render () {
      if(isContinuing) {
         return (
            <div>
               <h1 id="directions"> Please take this quick survey so that we can assess what you may qualify for.</h1>
               <h2 id="notice"> Notice: We will be saving yes or no answers to these questions in order to determine the effectiveness of this survey. No personal information will be saved. </h2>
               {survey2}
               {survey2_buttons}
            </div>
         );
      }
      else {
         return (
            <div>
               <h1 id="directions"> Please take this quick survey so that we can assess what you may qualify for.</h1>
               <h2 id="notice"> Notice: We will be saving yes or no answers to these questions in order to determine the effectiveness of this survey. No personal information will be saved. </h2>
               {survey1}
               {survey1_buttons}
            </div>
         );
      }
      
   }
};