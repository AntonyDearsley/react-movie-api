import React, {useEffect, useState}  from 'react'
import getFilms from '../../services/getFilms';
import Movie from '../Movie'


export default function ListOfMovies({ keyword }) {
  const [films, setFilms] = useState([]);

    useEffect(() => {
        getFilms({ keyword })
            .then(films => setFilms(films)) 
    }, [keyword]) 

  return films.map(({id, title, url}) => 
      
      <Movie
        key = {id}
        title = {title}
        image = {url}
      /> 
  )
}

