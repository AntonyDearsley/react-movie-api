import Movie from '../Movie'

export default function ListOfMovies({ films }) {
  return films.map(({Title, imdbID, Poster}) => 
      <Movie
        key = {imdbID}
        title = {Title}
        image = {Poster}
      /> 
  )
}

