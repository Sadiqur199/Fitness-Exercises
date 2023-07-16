import { Box } from '@mui/material';
import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import SearchExercises from '../SearchExercises/SearchExercises';
import Exercises from '../Exercises/Exercises';


const Home = () => {
  return (
   <Box>
      <HeroBanner></HeroBanner>
      <SearchExercises></SearchExercises>
      <Exercises></Exercises>
   </Box>
  );
};

export default Home;