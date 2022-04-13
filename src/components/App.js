import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import { Container, Row, Col } from 'react-bootstrap'
import Results from '../components/Results.js';
import '../styleSheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as tf from '@tensorflow/tfjs';
import { tensor } from '@tensorflow/tfjs';
import axios from 'axios';

function App() {

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  
  const [isButtonPressed, setButtonPressed] = useState();

  const [prediction, setPrediction] = useState("Upload an image");



  const callFlask = () => {

    // Post -> Flask
    var imgtag = document.getElementById("output");
    let formData = new FormData();
    formData.append("image", selectedFile);

    axios.post('/predict', formData).then(function (response) {
      setPrediction(response.data);
    });
  }

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
    var reader = new FileReader();

    var imgtag = document.getElementById("output");
    imgtag.title = selectedFile.name;

    reader.onload = function(event) {
      imgtag.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);

    console.log(imgtag);

    {/*setIsSelected(true);*/}
	};

	const handleSubmission = (event) => {
    

    var imgtag = document.getElementById("myimage");

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
                <p>Welcome to Team Artemis' Alzheimer's Detection Application!
                  To get started, click on the button on the right.</p>
              </div>
            </div>
          </Col>
          
          <Col>
            <div className="App-get-started">
              <div className="content-box">
                <p>Upload a jpeg file below to add your MRI file to be analyzed for Alzheimer's.<br></br></p>
                <p><input type = "file" className = "mriScan" name = "mri" onChange={changeHandler}/></p>
                <div>
                  <button className="start" onClick={handleSubmission}>Add MRI Scan</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row><br></br><br></br><br></br></Row>

        <Row>
          {/*
          {isSelected ? (
          <div>
            <Results/>
          </div>
          ) : (
            <p>Select a file to show results</p>
          )}
          */}
        </Row>

        <Row>
          <Col></Col><Col></Col><Col></Col><Col></Col>
          <Col>
            <div className = "content-box" align = "center"><button className = "run" onClick={() => callFlask()}>Run Algorithm</button></div>
            <div>
              <img id="output"></img>
              <p>Prediction: {prediction}</p>
            </div>
          </Col>
          <Col></Col><Col></Col><Col></Col><Col></Col>
        </Row>
      </Container>

      <footer>
        <text className = "appFooter">Courtesy of Team Artemis</text>
      </footer>
    </div>
  );
}

export default App;
