import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function Logout() {
  const { logout } = useAuth();
  const { push } = useRouter();


  useEffect(() => {
    const handleLogout = async () => {
        try {
            await logout()
        } catch (err) {
            console.error('Unable to logout', err)
        }
    }
    handleLogout();
  }, []);

  return (
    null
  );
}
