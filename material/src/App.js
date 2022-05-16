import './App.css';

import {BrowserRouter as Router } from "react-router-dom";

import MuiNavigationBar from './organisms/navigation/MuiNavigationBar';

function App() {
  return (
    <div className="App">
      <Router>
        
      </Router>
      <MuiNavigationBar />
      {/* <MuiHeading />
      <MuiNavLinks /> */}
    </div>
  );
}

export default App;
