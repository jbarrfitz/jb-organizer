import React, { ComponentProps, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

export interface IProtectedRouteProps {
    redirect?: boolean;
    children: JSX.Element;
}


export function ProtectedRouteComponent({ children, redirect = true }: IProtectedRouteProps) {
  const { user } = useAuth();
    const { push } = useRouter();

    if (!user?.email) {
        console.warn('ProtectedRoute: Not logged in')
        if (redirect) {
            push('/login')
        }
        return null;
    }
  return children;
}

const ProtectedRoute = (Component) => <ProtectedRouteComponent><Component/></ProtectedRouteComponent>
export default ProtectedRoute;
