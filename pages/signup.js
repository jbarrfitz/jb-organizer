import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Signup () {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div style={{ width: '40%', margin: 'auto' }}>
      <h1 className='text-center my-3'>Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            required
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />
        </Form.Group>
      </Form>
    </div>
  );
};
