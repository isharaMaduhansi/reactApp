import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";



const NavBar = () => {
let id=1;

  return (
    <div>
      <>
      <Navbar bg="light">
          <Container>
            <Link to="/">Home</Link>
          </Container>
        </Navbar>
        <Navbar bg="light">
          <Container>
            <Link to={`/Component1/${id}`}>Component1</Link>
          </Container>
        </Navbar>
        <br />
        <Navbar bg="light">
          <Container>
          <Link to="/Component2">Component2</Link>
          </Container>
        </Navbar>
        <br />
      </>
    </div>

  );
}
export default NavBar;
