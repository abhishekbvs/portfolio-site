import React from "react";
import Challenge1 from "../images/11795.jpg";
import Countdown from "../components/countdown";

const Face = () => (
    <>
   <div id="face" className="container-fluid">
        <h1 >Code Breaker Challenges</h1>
        <h2>InCTF19</h2>
   </div>
   <div id="challenge">
     <div className ="container">
          <h2>Code breaker Challenge 1</h2>
          <p>  There are many variations of passages of Lorem Ipsum available, 
               but the majority have suffered alteration in some form, by injected humour, 
               or randomised words which don't look even slightly believable. If you are going 
               to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing 
               hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to 
               repeat predefined chunks as necessary, making this the first true generator on the Internet. 
               It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, 
               to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always 
               free from repetition, injected humour, or non-characteristic words etc.
          </p>
          <img src={Challenge1} alt="Challenge 1" style={{ height: "30vh" }} />
          <br></br>
          <div>
               <h4><strong>Round ends in</strong></h4>
               <Countdown deadline='10:11:12 December 30, 2019'/>
          </div>
          <br></br>
          <div>
               <h4>The Winner is CADET 0x232</h4>
          </div>
          <br></br>

     </div>
   </div>
   </>
)

export default Face
