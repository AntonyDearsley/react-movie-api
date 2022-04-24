import { useEffect, useState } from 'react'
import getFilms from '../../services/getFilms'

export function useFilms ({ keyword }) {
    const [films, setFilms] = useState([])
    const [page] = useState(1)

    useEffect(() => {
        getFilms({ keyword , page })
            .then(films =>{
              console.log(films)
              setFilms(films)
            }) 
    }, [keyword, page]) 


    return {films, setFilms};
}