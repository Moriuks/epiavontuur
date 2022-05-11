import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import './NavBar.scss';

function NavBar(){

    return(
        <Navbar  
          bg="light"
          container="fluid"
          expand="md"
          fixed="top"
          className="Epi-Navbar"
        >
        <Container>
            <Navbar.Brand href="#home" id="NavBar-Title">EPI AVONTUUR</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto Epi-departments">
                <NavDropdown  title="Nosotros" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/1.1">Equipo</NavDropdown.Item>
                    <NavDropdown.Item href="#action/1.2">Nosotros</NavDropdown.Item>
                    <NavDropdown.Item href="#action/1.3">Carreras</NavDropdown.Item>
                </NavDropdown>
                    <NavDropdown title="Soluciones" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Infraestructura</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Aviación</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Solución Satelital</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Equipamiento y Tecnología</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#link">Clientes</Nav.Link>
                <Nav.Link href="#link">FAQ's</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBar