import React, {useState, useEffect} from 'react';
import logo from '../logo.svg';
import { Container, Row, Col } from 'react-bootstrap'
import Results from '../components/Results.js';
import '../styleSheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as tf from '@tensorflow/tfjs';
import { tensor } from '@tensorflow/tfjs';

function App() {

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
  
  const [isButtonPressed, setButtonPressed] = useState();

  const [prediction, setPrediction] = useState("Upload an image");

/*
  useEffect(() => {
    fetch('/cnn-model').then(res => res.json()).then(data => {
      setPrediction(data.prediction);
      
    });
    console.log("beans is good");
  });*/

  const callFlask = () => {
    /*
    fetch('/cnn-model').then(res => console.log(res)JSON.parse(res)).then(data => {
      setPrediction(data.prediction);
    });

    console.log("beans is bad");
    console.log(prediction)*/

    console.log("inside handleGetJson"); 
    fetch('/cnn-model', { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' } }).then((response) => response.json()).then((messages) => {
      setPrediction(messages.prediction)});

  }

  const handleGetJson = () => { 
    
    
    }



  //var imgtag = new Image();

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
    var reader = new FileReader();

    
    //console.log(imgtag.title);
    //console.log(selectedFile);
    var imgtag = document.getElementById("output");
    imgtag.title = selectedFile.name;

    reader.onload = function(event) {
      imgtag.src = event.target.result;
    };

    reader.readAsDataURL(selectedFile);

    /*
    var http = require('http-request');
    var options = {url: imgtag.src};
    http.get(options, '/image.jpeg', function (error, result) {
      if (error) {
          console.error(error);
      } else {
          console.log('File downloaded at: ' + result.file);
      }
  });*/

    //var tensorArray = tf.browser.fromPixels(imgtag);

    
    
    //tensorArray = tensorArray.expandDims();
    //tensorArray = tf.image.transform(tf.cast(tensorArray, 'float32'), [128, 128, 1]);
    //tf.image.transform(tf.cast(tf.tensor4d([0, tensorArray]), 'float32'), [128,128,1]);

    //const tensorData = tensorArray.dataSync();

    console.log(imgtag);

    {/*setIsSelected(true);*/}
	};

	const handleSubmission = (event) => {
    

    var imgtag = document.getElementById("myimage");
    //imgtag.title = selectedFile.name;
    //imgtag.src = event.target.results;

    //reader.readAsDataURL(selectedFile);
    
    //const tensorArray = tf.browser.fromPixels(imgtag);
    //console.log(event.target.results);
    //console.log(tensorArray);
    //console.log("hello world");

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
