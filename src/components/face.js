import React from "react";
import Table from 'react-bootstrap/Table';
// import Challenge1 from "../images/challenge.png";
// import Countdown from "../components/countdown";

const Face = () => (
    <>
   <div id="face" className="container-fluid">
        <h1><strong>Vidyut 2020</strong></h1>
        <h2><strong>amFOSS</strong></h2>
   </div>
   <div id="challenge">
     <div className ="container">
          <h2>Type Racing</h2>
          <p> The Stall is open. Intreseted to play and win the swag? Then dive in and start typing.  </p>
          <iframe title="Type" src="https://10fastfingers.com/widgets/ttembeddable/?dur=60" style={{width:'700px',height:'450px'}}></iframe>
          <br></br>
          <br></br>
          <h2>Scoreboard</h2>
          <Table striped bordered hover variant="dark" >
               <thead>
                    <tr>
                         <th>Rank</th>
                         <th>Name</th>
                         <th>Speed in WPM</th>
                         <th>Vidyut ID</th>
                         <th>From</th>
                    </tr>
               </thead>
                <tbody>
                    <tr>
                         <td>1</td>
                         <td>Abhishek Bvs</td>
                         <td>100</td>
                         <td>VAM3128</td>
                         <td>Amrita Vishwa Vidyapeetham</td>
                    </tr>
                         
               </tbody>
          </Table>  
          <br></br>
          <br></br>
          <h2>Terms and Conditions</h2>
          <p> By taking part in the competition you acknowledge and agree to abide by the following terms and conditions.
          For any particular race an individual is eligible for only one prize.
          The prizes are as stated and no cash or any other alternatives will be offered. Prizes are subject to availability and we reserve the right to substitute the prize with another of equal value without prior notice.
          The organizers decision in all matters related with the contest, including the results, will be final and no negotiation in this regard will be entertained.
          The terms and conditions are liable to change without prior notice according to the organizers discretion.</p>
          <br></br>
          
     </div>
   </div>
   </>
)
export default Face
