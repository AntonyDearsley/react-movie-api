const apiKey = "e17f44d2";

export default async function getAll ({ keyword, page }) {
    const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&page=${page}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response  => {
        const films =  response.Search
        films.map(result => { 
            const { Title, imdbID, Poster } = result
            return { Title, imdbID, Poster }
        })
        return films
    })
}
