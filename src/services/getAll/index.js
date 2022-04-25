const apiKey = "e17f44d2"
const url = "https://cdn.dribbble.com/users/547471/screenshots/3063720/not_found.gif"

export default async function getAll ({ keyword, page, type }) {
    const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&type=${type}&page=${page}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response  => {
        const films =  response.Search
        films.map(result => { 
            const { Title, imdbID, Poster } = result
            return Poster === 'N/A' ? { Title, imdbID, Poster: url } 
            : { Title, imdbID, Poster }
        })
        return films
    })
}

// example http://www.omdbapi.com/?apikey=e17f44d2&s=starwars&page=1
