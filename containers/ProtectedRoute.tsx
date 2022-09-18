import React, { ComponentProps, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export default function ProtectedRoute(Component, redirect = true) {
    const ProtectedRouteComponent = () => {
        const { push } = useRouter();
        const { user } = useAuth();
        const isAuthenticated = user?.email;

        useEffect(() => {
            if (!isAuthenticated) {
                console.warn('ProtectedRoute: Not logged in')
                if (redirect) {
                    push('/login')
                }
            }
        }, [isAuthenticated, push])
        return isAuthenticated ? <Component /> : null
    }
    return ProtectedRouteComponent
}
