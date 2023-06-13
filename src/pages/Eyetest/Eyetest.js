import "./Eyetest.css"
import Header from "../../components/Header";
import {ReactComponent as Uploadicon}  from "../../logos/upload.svg";
function  Eyetest(){

return(
    <div className="eyetestParentDiv">
      <div className="headerdiv">
        <Header></Header>
      </div>
    <div className="test_banner">
    <div className="eyetest">
     <h1 className="h1">Eye Test</h1>
     </div>
    <div className="main_box">
        <div className="questions">
<div className="que_box1">
<form>
  <p className="que1">Question 1:  What is the capital of France?</p>
  <div className="ans_div">
  <input type="checkbox" id="option1" name="answer" value="option1"/>
  <label for="option1">a. Paris</label><br/>

  <input type="checkbox" id="option2" name="answer" value="option2"/>
  <label for="option2">b. London</label><br/>

  <input type="checkbox" id="option3" name="answer" value="option3"/>
  <label for="option3">c. Rome</label><br/>

  <input type="checkbox" id="option4" name="answer" value="option4"/>
  <label for="option4">d. Berlin</label><br></br>
  </div>
 
</form>

</div>
<div className="que_box2">
    <form>
  <p className="que1">Question 1:  What is the capital of France?</p>
  <div className="ans_div">
  <input type="checkbox" id="option1" name="answer" value="option1"/>
  <label for="option1">a. Paris</label><br/>

  <input type="checkbox" id="option2" name="answer" value="option2"/>
  <label for="option2">b. London</label><br/>

  <input type="checkbox" id="option3" name="answer" value="option3"/>
  <label for="option3">c. Rome</label><br/>

  <input type="checkbox" id="option4" name="answer" value="option4"/>
  <label for="option4">d. Berlin</label><br></br>
  </div>
 
</form>
 </div>
 <div className="que_box3">
    <form>
  <p className="que1">Question 1:  What is the capital of France?</p>
  <div className="ans_div">
  <input type="checkbox" id="option1" name="answer" value="option1"/>
  <label for="option1">a. Paris</label><br/>

  <input type="checkbox" id="option2" name="answer" value="option2"/>
  <label for="option2">b. London</label><br/>

  <input type="checkbox" id="option3" name="answer" value="option3"/>
  <label for="option3">c. Rome</label><br/>

  <input type="checkbox" id="option4" name="answer" value="option4"/>
  <label for="option4">d. Berlin</label><br></br>
  </div>
 
</form>
 </div>
 <div  className="sub_mit" ><  button  className="btn" type="submit">Submit</button></div>
 
        </div>
    
        <div className="eyeimage">


        <span> <Uploadicon/></span>
        
        <label for="file-upload" className="upload-button">Upload</label>
        <input className="choose"type="file" id="file-upload" ></input>
        </div>
        
    
        
        <br />
    </div>
     </div>
    </div>
    
  );
}

export default Eyetest;