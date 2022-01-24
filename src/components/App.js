import React from 'react';
import '../cssFiles/App.css';
import Login from './Login';
import { Button , Row,Col} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div>
        <h1> My first App</h1>
        <Login name="class based componenet"/>

        <Row className="mx-0 mt-5">
          <Button as={Col} variant="primary">Button #1</Button>
          <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
          <Button as={Col} variant="success">Button #3</Button>
        </Row>
      
      </div>
    </div>
  );
}

export default App;
