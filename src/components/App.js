import logo from '../logo.svg';
import '../styleSheets/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Alzheimer's Detection Application</h1>
      </header>
      <div className="App-desc">
        <div className="content-box">
          <p>Welcome to Team Artemis' Alzheimer's Detection Application! To get started, click on the button on the right.</p>
        </div>
      </div>

      <div className="App-get-started">
        <div className="content-box">
          <button className="btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default App;
