import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../styleSheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function App() {

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  
  const [isButtonPressed, setButtonPressed] = useState();

  const [prediction, setPrediction] = useState("Upload an image");

  useEffect(() => {
    document.title = "AI for Alzheimer's"
 }, []);
  
  const callFlask = () => {

    // Post -> Flask
    console.log("calling flask before");
    let formData = new FormData();
    formData.append("image", selectedFile);

    axios.post('/predict', formData).then(function (response) {
      setPrediction(response.data);
    });

    console.log("calling flask");

  }

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
    document.getElementById("output").src = "";
    setPrediction("Select the Run Algorithm Button");
	};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Alzheimer's Detection Application</h1>
      </header>

      <Container>
        <Row>
          <Col>
            <div className="App-desc">
              <div className="content-box">
                Welcome to Team Artemis' Alzheimer's Detection Application!
                  To get started, click on the button on the right.
              </div>
            </div>
          </Col>
          
          <Col className="rightSideColumn">
            <div className="App-get-started">
              <div className="content-box">
                <p>Upload a jpeg file below to add your MRI file to be analyzed for Alzheimer's.<br></br></p>
                <p><input type = "file" className = "mriScan" name = "mri" onChange={changeHandler}/></p>
              </div>
            </div>
          </Col>
        </Row>

        <Row><br></br><br></br><br></br></Row>

        <Row>
        </Row>

        <Row>
          <Col className="centeredBox">
            <div className = "content-box" align = "center"><button className = "run" onClick={() => callFlask()}>Run Algorithm</button></div>
          </Col>
        </Row>

        <Row>
        <Col></Col><Col></Col><Col></Col><Col></Col>
          <Col className="centeredBox">
            <div className="predictionOutput">
              <div className="content-box predictText">{prediction}</div><br/>
            </div>
          </Col>
          <Col></Col><Col></Col><Col></Col><Col></Col>
        </Row>
        <Row><br/><br/><br/></Row>
        <Row><br/><br/><br/></Row>
      </Container>

      <footer>
        <text className = "appFooter">Courtesy of Team Artemis</text>
      </footer>
    </div>
  );
}

export default App;
