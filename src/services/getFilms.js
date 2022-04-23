const apiKey = "k_54s6pih7";

export default function getFilms ({ keyword }) {
    const apiURL = `https://imdb-api.com/en/API/Search/${apiKey}/${keyword}`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {results} = response
        const films = results.map(result=> { 
            const { title } = result.title;
            const { id } = result.id;
            const { url } = result.image;
            return { id, title, url }
        })
        return films
    })
}

// https://imdb-api.com/api#Title-header

// example star wars https://imdb-api.com/en/API/Search/k_54s6pih7/starwars