const apiKey = "e17f44d2";

export default function getFilms ({ keyword }) {
    const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const data = response.Search
        const films = data.map(result => { 
            const { Title, imdbID, Poster  } = result
            return { Title, imdbID, Poster }
        })
        return films
    })
}


// example star wars http://www.omdbapi.com/?apikey=e17f44d2&s=star+wars