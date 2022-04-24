import { useEffect, useState } from 'react'
import getAll from '../../services/getAll'

export function useFilms ({ keyword }) {
    const [films, setFilms] = useState([])
    const [page] = useState(1)

    useEffect(() => {
        getAll({ keyword , page })
            .then(films =>{
              const filter = films.filter(film => film.Type === ('movie'))
              setFilms(filter)
              
              setTimeout(() => {
                window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
              }, 500)
            }) 
    }, [keyword, page]) 


    return {films, setFilms};
}