import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box width="400px" sx={{ width: {xl: '1488px' }}} m="auto">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/exercise/:id" element={<ExerciseDetail/>} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
          <Route path="/Footer" element={<div>Footer</div>} />
        </Routes>
      </Box>
    </>
  )
}

export default App
