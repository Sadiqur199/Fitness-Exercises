import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import ExerciseVideos from '../ExerciseVideos/ExerciseVideos';
import SimilarExercises from '../SimilarExercises/SimilarExercises';
import { useParams } from 'react-router-dom';
import {exerciseOptions, fetchData,youtubeOptions} from '../../Utiliti/fetchData';


const ExrciseDetails = () => {
  const [exerciseDetail , setExerciseDetail] = useState({});
  const[exerciseVideos , setExerciseVideos] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    const fetchExercisesData = async () => {
    const exerciseDburl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exerciseDburl}/exercises/exercise/${id}`,exerciseOptions);
    setExerciseDetail(exerciseDetailData)


    // const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`,youtubeOptions);
    // setExerciseVideos(exerciseVideosData)

    }
    fetchExercisesData();
  },[id])


  return (
    <Box>
      <Details exerciseDetail = {exerciseDetail}></Details>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}></ExerciseVideos>
      <SimilarExercises></SimilarExercises>
    </Box>
  );
};

export default ExrciseDetails;