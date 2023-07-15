import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';

const Main = () => {
  return (
    <div>
      <Box width='400px' sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Box>
    </div>
  );
};

export default Main;