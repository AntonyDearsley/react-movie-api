const apiKey = "e17f44d2"
const url = "https://cdn.dribbble.com/users/547471/screenshots/3063720/not_found.gif"

export default async function getAll ({ keyword, page}) {
    const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&page=${page}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response  => {
        const films =  response.Search
        films.map(result => { 
            const { Title, imdbID, Poster, Type } = result
            return Poster === 'N/A' ? { Title, imdbID, Poster: url, Type } 
            : { Title, imdbID, Poster, Type }
        })
        return films
    })
}