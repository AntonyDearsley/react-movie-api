import ListOfElements from '../../components/ListOfElements'
import Button from '../../components/Button'
import { useHandleClickAll } from '../../hooks/handleClickAll'

export default function SearchType({ params }) {
    const keyword  = params
    const {handleClick, parameter} = useHandleClickAll(keyword)
    
    return  <div id='container' className='bg-zinc-900 h-full text-white flex flex-col items-center'>
                <div className='container'>
                    <ListOfElements element={parameter} />
                </div>
                    
                <div>
                    <Button handleClick={handleClick}>Más Elementos</Button>
                </div>
            </div>
}