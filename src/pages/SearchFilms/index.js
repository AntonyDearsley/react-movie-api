import ListOfMovies from '../../components/ListOfMovies'
import Button from '../../components/Button'
import { useHandleClickMovie } from '../../hooks/handleClickMovie'

export default function SearchFilms({ params }) {
    const keyword  = params
    const {handleClick, films} = useHandleClickMovie(keyword)
    
    return  <div id='container' className='bg-zinc-900 h-full text-white flex flex-col items-center'>
                <div className='container'>
                    <ListOfMovies films={films} />
                </div>
                    
                <div>
                    <Button handleClick={handleClick}>Más Películas</Button>
                </div>
            </div>
}