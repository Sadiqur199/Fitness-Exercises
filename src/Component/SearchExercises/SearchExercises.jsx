import { Box, Button, Stack, TextField, Typography, colors } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {exerciseOptions, fetchData} from '../../Utiliti/fetchData';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';

const SearchExercises = ({setExercises , bodyPart , setBodyPart}) => {
  const [search , setSearch] = useState('')
  const [bodyParts , setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExerciseData = async() =>{
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)

      setBodyParts(['all',...bodyPartsData])
    }
    fetchExerciseData()
  },[])

  const handelSearch = async() =>{

    if(search){
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      console.log(exerciseData)
      const searchExercise = exerciseData.filter((exercise)=>
        exercise.name.toLowerCase().include(search)
        || exercise.target.toLowerCase().include(search)
        || exercise.equipment.toLowerCase().include(search)
        || exercise.bodyPart.toLowerCase().include(search)
      )
     setSearch('')
     setExercises(searchExercise)

    }

  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{lg:'44px' , xs:'30px'}}} mb='50px' textAlign='center'>
        Awesome Exercises You <br /> 
        Should Know
      </Typography>
       <Box position='relative' mb='72px'>
         <TextField 
         sx={{
          input:{fontWeight:'700' , border:'none' , borderRadius:'4px'},
          width:{lg:'800px' , xs:'350px'},
          backgroundColor:'#fff',
          borderRadius:'40px'
         }}
         height='76px' 
         value={search}
         onChange={(e)=>setSearch(e.target.value.toLowerCase())}
         placeholder='Search Exercises'
         type='text'
         />
         <Button className='search-btn' sx={{bgcolor:'#FF2625' ,color:'#fff' , textTransform:'none' , width:{lg:'175px' , xs:'80px'} , fontSize:{lg:'20px' , xs:'14px'} , height:'56px' , position:'absolute',right:'0'}}
         onClick={handelSearch}
         >Search Exercise</Button>
       </Box>
       <Box sx={{position:'relative' , width:'100%' , p:'20px'}}>
         <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
       </Box>
    </Stack>
  );
};

export default SearchExercises;