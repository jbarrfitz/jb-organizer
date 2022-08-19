import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginData);
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
            value={loginData.email}
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
            value={loginData.password}
            required
            type='password'
            placeholder='password'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </div>
  );
}
