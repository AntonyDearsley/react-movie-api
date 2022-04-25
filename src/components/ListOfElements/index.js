import Element from '../Element'

export default function ListOfElements({ element }) {
  return element.map(({Title, imdbID, Poster, Type}) => 
      <Element
        id = {imdbID}
        title = {Title}
        image = {Poster}
        type = {Type}
      /> 
  )
}

