const apiKey = "e17f44d2"
const url = "https://images-na.ssl-images-amazon.com/images/I/41bLP6NzvKL.jpg"

export default async function getAll ({ keyword, page}) {
    const apiURL = `http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&page=${page}`
    
    return fetch(apiURL)
      .then(res => res.json())
      .then(response  => {
        let results = undefined
        if  (response.Response !== "False") {
            const elements = response.Search
            results = elements.map(result => { 
            const { Title, imdbID, Poster, Type } = result
            return Poster  === "N/A" ? { Title, imdbID, Poster: url, Type } 
            : { Title, imdbID, Poster, Type }
        })} else {
            return response.Response
        }
        return results
      })
}