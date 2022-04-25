import {useState} from "react"
import getAll from "../../services/getAll"
import { useSeries } from "../useSeries"


export function useHandleClickSerie({ keyword }) {
    const {parameter, setParameter} = useSeries({ keyword })
    const [page, setPages] = useState(2)
    const  type  = 'series'

    const handleClick = () => {
        setPages(page+1)
        getAll({ keyword , page , type })
        .then(elements => {
            setParameter(parameter.concat(elements))
        })

        setTimeout(() => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        }, 500)
    }
    
    return {handleClick, parameter}
}