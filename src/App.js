import React, { useState } from 'react'
import './App.css';
import ListOfMovies from './components/ListOfMovies';
import getFilms from './services/getFilms';
import {useFilms} from "./hooks/useFilms"


export default function App() {
  const [keyword] = useState(['star wars'])
  const {films, setFilms} = useFilms({ keyword })
  const [page, setPages] = useState(2)
  
  const handleClick = () => {
    setPages(page+1)
    getFilms({ keyword , page })
    .then(film => {
      const movies = films.concat(film)
      setFilms(movies)
    }) 
  }
  

  return <div id='container' className='bg-zinc-900 h-full text-white flex flex-col items-center'>
    <div className='container'>
      <ListOfMovies films={films} />
    </div>
    <div>
      <button id='btn' onClick={handleClick} className='bg-amber-500 text-stone-900 font-bold w-56 p-4 mt-5 mb-7 rounded-md hover:bg-amber-400 hover:scale-105 duration-100' >Más Películas</button>
    </div>
  </div>
}
