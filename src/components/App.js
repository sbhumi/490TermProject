import React, {useState} from 'react';
import logo from '../logo.svg';
import { Container, Row, Col } from 'react-bootstrap'
import Results from '../components/Results.js';
import '../styleSheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
    {/*setIsSelected(true);*/}
	};

	const handleSubmission = () => {
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
            <div className = "content-box" align = "center"><button className = "run">Run Algorithm</button></div>
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
