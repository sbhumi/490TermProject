import logo from '../logo.svg';
import { Container, Row, Col } from 'react-bootstrap'
import '../styleSheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <footer>
        <text className = "appFooter">Courtesy of Team Artemis</text>
      </footer>
    </div>
  );
}

export default App;
