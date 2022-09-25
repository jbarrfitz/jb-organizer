import Link from 'next/link';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { login } = useAuth();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = loginData;

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password).then((res) => console.warn(res, typeof res))
    console.log(email, password.length);
  };

  return (
    <div style={{ width: '40%', margin: 'auto' }}>
      <h1 className='text-center my-3'>Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
            value={email}
            required
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            value={password}
            required
            type='password'
            placeholder='password'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
        <Link href="signup">
          <Button variant='ghost' style={{ float: 'right' }}>
            Register
          </Button>
        </Link>
      </Form>
    </div>
  );
}
