import "./Eyetest.css"
import Header from "../../components/Header";
import {ReactComponent as Uploadicon}  from "../../logos/upload.svg";
import axios from "axios";
import { useRef, useState } from "react";
function  Eyetest(){
  const [responseText, setResponseText] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [surveyAnswers, setSurveyAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
 

  const fileRef = useRef(null)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const file = fileRef.current.files[0  ];


    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("http://localhost:5000/auth/detect-cataract", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Image uploaded successfully");
      console.log(response.data); // Handle the response from the backend
     // Extract cataractResult from the response object
    
      setResponseText(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    submitSurveyAnswers()
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUploadedImage(URL.createObjectURL(file));

  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSurveyAnswers((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitSurveyAnswers = async () => {
    try {
      const response = await axios.post("http://localhost:5000/auth/submit-survey", surveyAnswers);
      console.log("Survey answers submitted successfully:", response.data);
      // Do something with the response if needed
    } catch (error) {
      console.error("Error submitting survey answers:", error);
    }
  };

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
              <p className="que1">Question 1: How often do you have the urge to rub your eyes?</p>
              <div className="ans_div">
                <input
                  type="radio"
                  id="option1"
                  name="question1"
                  value="a.Very Often"
                  onChange={handleInputChange}
                />
                <label htmlFor="option1">a.Very Often</label><br />

                <input
                  type="radio"
                  id="option2"
                  name="question1"
                  value="b.Sometimes"
                  onChange={handleInputChange}
                />
                <label htmlFor="option2">b. Sometimes</label><br />

                <input
                  type="radio"
                  id="option3"
                  name="question1"
                  value="c.Rare"
                  onChange={handleInputChange}
                />
                <label htmlFor="option3">c. Rare</label><br />

                <input
                  type="radio"
                  id="option4"
                  name="question1"
                  value="d.Never"
                  onChange={handleInputChange}
                />
                <label htmlFor="option4">d. Never</label><br />
              </div>
            </form>
          </div>
          {/* Question 2 */}
          <div className="que_box2">
            <form>
              <p className="que1">Question 2: Does the sun seem too bright for you when you go outdoors?</p>
              <div className="ans_div">
                <input
                  type="radio"
                  id="option5"
                  name="question2"
                  value="a.Yes"
                  onChange={handleInputChange}
                />
                <label htmlFor="option5">a. Yes</label><br />

                <input
                  type="radio"
                  id="option6"
                  name="question2"
                  value="b.Sometimes"
                  onChange={handleInputChange}
                />
                <label htmlFor="option6">b. Sometimes</label><br />

                <input
                  type="radio"
                  id="option7"
                  name="question2"
                  value="c.No"
                  onChange={handleInputChange}
                />
                <label htmlFor="option7">c. No</label><br />

                <input
                  type="radio"
                  id="option8"
                  name="question2"
                  value="d.Never"
                  onChange={handleInputChange}
                />
                <label htmlFor="option8">d. Never</label><br />
              </div>
            </form>
          </div>
          {/* Question 3 */}
          <div className="que_box3">
            <form>
              <p className="que1">Question 3: Do you have any of these symptoms?</p>
              <div className="ans_div">
                <input
                  type="checkbox"
                  id="option9"
                  name="question3"
                  value="a.Pain/Discomfort"
                  onChange={handleInputChange}
                />
                <label htmlFor="option9">a. Pain/Discomfort</label><br />

                <input
                  type="checkbox"
                  id="option10"
                  name="question3"
                  value="b.Burning/Stinging"
                  onChange={handleInputChange}
                />
                <label htmlFor="option10">b. Burning/Stinging</label><br />

                <input
                  type="checkbox"
                  id="option11"
                  name="question3"
                  value="c.Stinging"
                  onChange={handleInputChange}
                />
                <label htmlFor="option11">c. Stinging</label><br />

                <input
                  type="checkbox"
                  id="option12"
                  name="question3"
                  value="d.Gritty Sensation"
                  onChange={handleInputChange}
                />
                <label htmlFor="option12">d. Gritty Sensation</label><br />
              </div>
            </form>
 </div>
 <div className="submit_sur">
              {/* Submit button */}
              <button className="btn-1" type="submit" >
                Submit survey
              </button>
            </div>
 <div  className="sub_mit" ><  button  className="btn" type="submit"  onClick={handleSubmit}>Submit</button></div>
 
        </div>
    
        <div className="eyeimage">
        <span>
            {!uploadedImage ? (
              <Uploadicon/>
            ) : (
              <img className="uploaded-image" src={uploadedImage} alt="Uploaded" />
            )}
          </span>


        
        <label for="file-upload" className="upload-button">Upload</label>
        <input className="choose" type="file"  id="file-upload" ref={fileRef}  onChange={handleImageChange}></input>
        </div>
        
       
        <br />
       
   
    </div>
     </div>
     <div>
    
     </div>
     <div>
          {/* Result message */}
          {responseText && responseText.result && parseFloat(responseText.result[0]) < 0.4 && responseText.result[1]>0.2 ? (
        <div className="result-message">
          <h2>You may have cataract. Please consult a doctor for further evaluation.</h2>
        </div>
      ) : responseText && responseText.result && parseFloat(responseText.result[1]) < 0.2 ? (
        <div className="result-message">
          <h2>You  have a higher risk of Conjuntivites. Please take necessary precautions and consult a doctor.</h2>
        </div>
      ) :responseText && responseText.result && parseFloat(responseText.result[0]) > 0.4 && responseText.result[1]>0.2 ? (
        <div className="result-message">
          <h2>Your Eye are not detect with Conjuntivies or Cataract. Please seek professional advice for a detailed evaluation.</h2>
        </div>
      ): (
        <div className="result-message">
          <h2>Take survey.. upload your photo .. click submit!</h2>
        </div>
      )}
          
        </div>
    </div>
    
  );
}

export default Eyetest;