import React from "react";

import Challenge1 from "../images/Challenge1.jpg";
import Countdown from "../components/countdown";

const Face = () => (
    <>
   <div id="face" className="container-fluid">
        <h1><strong>Code Breaker</strong></h1>
        <h2><strong>InCTF19</strong></h2>
   </div>
   <div id="challenge">
     <div className ="container">
          <h2>Code breaker Challenge 4</h2>
          <p>  Break the code from the image  </p>
          <img src={Challenge1} alt="Challenge 4" style={{ height: "50vh" }} />
          <div style={{ paddingTop: "1rem" }}>
               <h3><b>HINT</b></h3>
               <p>This is a substitution cipher</p>
          </div>
          <div  style={{ paddingTop : "1rem" }} >
               <h4><strong>Round ends in</strong></h4>
               <Countdown deadline='December 29, 2019 14:00:00'/>
          </div>
          <br></br>
          <div>
               {/* <h4>The Winner is CADET 0x232</h4> */}
          </div>
          <br></br>
     </div>
   </div>
   <div id="challenge">
     <div className ="container">
          <h2>Code breaker Challenge 5</h2>
          <p>Complete all the challenges within the time limit and get the badge</p>
          <iframe src="https://www.101computing.net/code-breaker/" width="1000" height="700">Challenge</iframe>
          <div  style={{ paddingTop : "1rem" }} >
               <h4><strong>Round ends in</strong></h4>
               <Countdown deadline='December 29, 2019 15:00:00'/>
          </div>
     </div>
   </div>
   </>
)
export default Face
