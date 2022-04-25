import {useState} from "react"
import getType from "../../services/getType"
import { useType } from "../useType"


export function useHandleClickType({ keyword, type }) {
    const {parameter, setParameter} = useType({ keyword, type })
    const [page, setPages] = useState(2)

    const handleClick = () => {
        setPages(page+1)
        getType({ keyword , page , type })
        .then(elements => {
            setParameter(parameter.concat(elements))
        })

        setTimeout(() => {
        window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
        }, 500)
    }
    
    return {handleClick, parameter}
}