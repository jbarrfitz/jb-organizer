import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';

export default function NavbarComp() {
  const { user } = useAuth();
  // if (user.email)
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
            {user?.email ? (
              <Link href='/logout' passHref>
                <Nav.Link>Logout</Nav.Link>
              </Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
