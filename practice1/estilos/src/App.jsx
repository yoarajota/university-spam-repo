import { useState } from 'react'
import './App.css'
import RenderStudentList from './components/RenderStudentList'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import Contact from './components/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppBar color="primary" position="static">
        <h1>Meu cabeçalho</h1>
        <Toolbar>
          <Typography variant="h4" color="inherit"> Meu cabeçalho </Typography>
        </Toolbar>

        <NavBar />
      </AppBar >

      <Typography variant="h1" color="inherit">Algum texto</Typography>

      <Posts />

      <Contact />

      <RenderStudentList />
    </>
  )
}

export default App
