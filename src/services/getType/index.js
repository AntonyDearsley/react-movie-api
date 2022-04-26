const apiKey = "e17f44d2"
const url = "https://images-na.ssl-images-amazon.com/images/I/41bLP6NzvKL.jpg"

export default async function getType ({ keyword, page, type }) {
    const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&type=${type}&page=${page}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response  => {
        const elements =  response.Search
        const results = elements.map(result => { 
            const { Title, imdbID, Poster, Type } = result
            return Poster === 'N/A' ? { Title, imdbID, Poster: url, Type } 
            : { Title, imdbID, Poster, Type }
        })
        return results
    })
}

// example http://www.omdbapi.com/?apikey=e17f44d2&s=starwars&page=1
