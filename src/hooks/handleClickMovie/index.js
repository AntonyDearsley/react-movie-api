import {useState} from "react"
import getAll from "../../services/getAll"
import { useFilms } from "../useFilms"


export function useHandleClickMovie( { keyword }) {
    const {parameter, setParameter} = useFilms({ keyword })
    const [page, setPages] = useState(2)
    const type = 'movie'

    const handleClick = () => {
        setPages(page+1)
        getAll({ keyword , page, type })
        .then(elements => {
            setParameter(parameter.concat(elements))
        })

        setTimeout(() => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        }, 500)
    }
    
    return {handleClick, parameter}
}