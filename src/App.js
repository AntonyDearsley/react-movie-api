import React, { useState, useEffect } from 'react'
import './App.css';
import ListOfMovies from './components/ListOfMovies';
import getFilms from './services/getFilms';


function App() {
  const [keyword] = useState('Star wars')
  const [films, setFilms] = useState([])

  useEffect(() => { 
      getFilms({ keyword })
          .then(films => {
              setFilms(films)
          })
  }, [keyword])

  return <div id='container' className='bg-zinc-900 h-screen'>
    <ListOfMovies films={films} />
  </div>
}

export default App;
