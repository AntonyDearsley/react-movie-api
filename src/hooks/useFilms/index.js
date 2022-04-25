import { useEffect, useState } from 'react'
import getAll from '../../services/getAll'


export function useFilms ({ keyword }) {
    const [parameter, setParameter] = useState([])
    const [page] = useState(1)
    const type = 'movie'

    useEffect(() => {
        getAll({ keyword , page , type})
            .then(elements => {
              setParameter(elements)
              
              setTimeout(() => {
                window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
              }, 500)
            }) 
    }, [keyword, page, ]) 


    return {parameter, setParameter};
}