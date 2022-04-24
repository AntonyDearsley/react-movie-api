import {useState} from "react"
import getAll from "../../services/getAll"
import { useFilms } from "../useFilms"


export function useHandleClickMovie( { keyword }) {
    const {element, setElement} = useFilms({ keyword })
    const [page, setPages] = useState(2)

    const handleClick = () => {
        setPages(page+1)
        getAll({ keyword , page })
        .then(elements => {

            const filter = elements.filter(element => element.Type === ('movie'))
            const family = element.concat(filter)
            setElement(family)
        })

        setTimeout(() => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        }, 500)
    }
    
    return {handleClick, element}
}