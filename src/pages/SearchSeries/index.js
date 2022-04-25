import ListOfMovies from '../../components/ListOfMovies'
import Button from '../../components/Button'
import { useHandleClickSerie } from '../../hooks/handleClickSerie'

export default function SearchSeries({ params }) {
    const keyword  = params
    const {handleClick, parameter} = useHandleClickSerie(keyword)
    
    return  <div id='container' className='bg-zinc-900 h-full text-white flex flex-col items-center'>
                <div className='container'>
                    <ListOfMovies films={parameter} />
                </div>
                    
                <div>
                    <Button handleClick={handleClick}>Más Series</Button>
                </div>
            </div>
}