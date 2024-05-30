import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import UserContextProvider from '../context/UserContextProvider';

function Layout() {
  return (
    <UserContextProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </UserContextProvider>
  );
}

export default Layout;

