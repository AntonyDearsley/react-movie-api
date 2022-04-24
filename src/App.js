import React, { useState } from 'react'
import './App.css';
import ListOfMovies from './components/ListOfMovies';
// import getFilms from './services/getFilms';


export default function App() {
  const [keyword] = useState(['Pirates of the caribbean'])
  
  // const [films, setFilms] = useState([])

  // useEffect(() => { 
  //     getFilms({ keyword })
  //         .then(films => {
  //             setFilms(films)
  //         })
  // }, [keyword])

  return <div id='container' className='bg-zinc-900 h-full text-white'>
    <ListOfMovies keyword={keyword} />
  </div>
}
