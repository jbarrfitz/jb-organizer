import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';

export default function Signup() {
  const { user, signup } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = data;

  const handleSignup = (e) => {
    e.preventDefault();
    signup(email, password).then((res) =>
      console.warn(res, typeof res)
    );
    console.log(email, password.length);
  };

  return (
    <div style={{ width: '40%', margin: 'auto' }}>
      <h1 className="text-center my-3">Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) =>
              setData({ ...data, email: e.target.value })
            }
            value={email}
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setData({ ...data, password: e.target.value })
            }
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
