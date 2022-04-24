const apiKey = "e17f44d2";
const url404 = 'https://images-na.ssl-images-amazon.com/images/I/41bLP6NzvKL.jpg'

export default async function getFilms ({ keyword, page }) {
    const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&page=${page}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response  => {
        const datas =  response.Search
        const filter = datas.filter(data => data.Type === ('movie' || 'serie'))
        const films = filter.map(result => { 
            const { Title, imdbID, Poster } = result
            return result.Poster === 'N/A' ? 
            { Title, imdbID, Poster: url404} : { Title, imdbID, Poster }
        })
        return films
    })
}


// example star wars http://www.omdbapi.com/?apikey=e17f44d2&s=star+wars