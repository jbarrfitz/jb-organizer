import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function NavbarComp() {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link href='/' passHref>
          <Navbar.Brand>JB Organizer</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Link href='/signup' passHref>
              <Nav.Link>Signup</Nav.Link>
            </Link>
            <Link href='/login' passHref>
              <Nav.Link>Login</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
