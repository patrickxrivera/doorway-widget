import React from 'react';
import Button from "react-bootstrap/Button";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const handleGetAccessPress = () => {
    console.log("pressed get access!")
  }

  return (
    <div className="follow-gate-widget__container">
      <Button onClick={handleGetAccessPress} variant="primary">Get Access</Button>
    </div>
  );
}

export default App;
