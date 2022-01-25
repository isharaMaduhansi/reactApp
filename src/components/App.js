import React from 'react';
import '../cssFiles/App.css';
import Login from './Login';
import Component1 from './Component1';
import Component2 from './Component2';
import Home from './Home';
import NavBar from './NavBar';
import { Button, Row, Col } from 'react-bootstrap';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        <h1> My first App</h1>
        <Login name="class based componenet" />
        <BrowserRouter>
          <NavBar />
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route exact path={'/Component1/:id'} element={<Component1 />} />
          <Route path="/Component2" element={<Component2 />} />
          </Routes>
        </BrowserRouter>
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
