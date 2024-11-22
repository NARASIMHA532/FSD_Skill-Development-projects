import React from 'react'
import { Box } from '@mui/material'
import { useState,useEffect } from 'react';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setbodyPart] = useState('all');
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setExercises={setExercises} 
        bodyPart={bodyPart} 
        setbodyPart={setbodyPart}
        />
        <Exercises
          setExercises={setExercises} 
          bodyPart={bodyPart} 
          setbodyPart={setbodyPart}
        />

    </Box>
  )
}

export default Home