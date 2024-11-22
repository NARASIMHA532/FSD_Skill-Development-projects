import React from 'react'
import { useState,useEffect } from 'react'
import { Box,Button,TextField,Stack,Typography } from '@mui/material'
import { fetchData, exoptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'


const SearchExercises = ({ setExercises, bodyPart, setbodyPart }) => {
    const [search, setSearch] = useState('')
    
    const [bodyParts, setbodyParts] = useState([])


    useEffect(()=>{
        const fetchexdata=async()=>{
            const bodyParts=await fetchData('https://exercisedb.p.rapidapi.com/bodyParts',exoptions);
            setbodyParts(['all',...bodyParts]);
        }
        fetchexdata();
    },[])

    const handleSearch=async()=>{
        if(search){
            const exdata=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exoptions);
            console.log(exdata);
            const searchedex=exdata.filter((exercise)=>{
                exercise.name.toLowerCase().includes(search) ||
                exercise.target.toLowerCase().includes(search) ||
                exercise.equipment.toLowerCase().includes(search) ||
                exercise.bodyPart.toLowerCase().includes(search);
            })
            setSearch('')
            setExercises(searchedex);
        }
    }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
            Awesome Exercises for you
        </Typography>
        <Box position="relative" mb="70px">
            <TextField 
            sx={{
                input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px'
            }}
            height="76px" value={search} 
            onChange={(e)=>setSearch(e.target.value.toLowerCase())}
            placeholder='Search Exercises' type='text'/>
            
            <Button className="search-btn" sx={{ ':hover':{bgcolor:'#FFF'}, bgcolor: '#FF2625', color: '#fff', textTransform: 'black', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
                Search
            </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setbodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises