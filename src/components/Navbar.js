import React from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { About } from "./About.js";
import './Navbar.css'



export const Navigation = (props) => {
  return (
    <div >
      <Navbar expand="lg" className='navigation'>
        <Container fluid>
          <Navbar.Brand href="#">{props.title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="todoList" />
          <Navbar.Collapse id="todoList">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>

            </Nav>
            {props.searchBar ? <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> : ""}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}
