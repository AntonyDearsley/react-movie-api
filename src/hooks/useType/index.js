import { useEffect, useState } from 'react'
import getType from '../../services/getType'


export function useType({ keyword, type }) {
    const [parameter, setParameter] = useState([])
    const [page] = useState(1)

    useEffect(() => {
        getType({ keyword , page, type})
            .then(elements => {
              setParameter(elements)
              
              setTimeout(() => {
                window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
              }, 500)
            }) 
    }, [keyword, page, type]) 


    return {parameter, setParameter};
}