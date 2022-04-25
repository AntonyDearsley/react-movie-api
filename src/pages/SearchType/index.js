import ListOfElements from '../../components/ListOfElements'
import Button from '../../components/Button'
import { useHandleClickType } from '../../hooks/handleClickType'

export default function SearchType({ params }) {
    const { keyword, type }  = params
    const {handleClick, parameter} = useHandleClickType({ keyword, type })
    let tipo = '';

    switch (type) {
        case 'movie': tipo='Películas'; break;
        case 'series': tipo='Series'; break;
        case 'game': tipo='Juegos'; break; 
        default: tipo='elemento'; break;
    }
    
    return  <div id='container' className='bg-zinc-900 h-full text-white flex flex-col items-center'>
                <div className='container'>
                    <ListOfElements element={parameter} />
                </div>
                    
                <div>
                    <Button handleClick={handleClick}>Más {tipo}</Button>
                </div>
            </div>
}