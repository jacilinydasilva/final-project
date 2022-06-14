import React from 'react';
import useState from 'react';
import { Button, Navbar, Container, Nav, FormControl, Form, InputGroup, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from "./SearchBar.jsx";
import first_name from "./formData.jsx";
import pic from './images/unhs.png'
//https://remotestack.io/react-local-storage-tutorial-store-form-state-in-localstorage/


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <img src= {pic} class="pic" />
        <Navbar.Brand href="#">Course Catalog</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <Nav.Link href="#" disabled>
              Link
        </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
