import React from 'react';
import Stack from '@mui/material/Stack';
import logo from '../../assets/images/Logo.png'
import { Link } from 'react-router-dom';
import { colors } from '@mui/material';

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent='space-around' sx={{gap:{sm:'122px' , xs:'40px'} , mt:{sm:'32px' , xs:'20px'} , justifyContent:'none'}} px='20px'>
    <Link to='/'>
     <img src={logo} alt="" style={{width:'48px' , height:'48px' , margin:'0px  20px'}} />
    </Link>
    <Stack direction="row" gap='40px' fontSize='24px' alignItems='flex-end'>
      <Link style={{textDecoration:'none' ,color:'#3A1212', borderBottom:'3px solid #FF2625'}} to='/'>Home</Link>
      <a href="#exercises" style={{textDecoration:'none' ,color:'#3A1212'}}>Exercises</a>
    </Stack>
  </Stack>
  );
};

export default Navbar;