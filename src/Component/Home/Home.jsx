import { Box } from '@mui/material';
import React, { useState } from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import SearchExercises from '../SearchExercises/SearchExercises';
import Exercises from '../Exercises/Exercises';


const Home = () => {
  const [bodyPart , setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
   <Box>
      <HeroBanner></HeroBanner>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} ></SearchExercises>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}></Exercises>
   </Box>
  );
};

export default Home;