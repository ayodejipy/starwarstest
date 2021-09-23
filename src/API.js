const API_URL = "https://swapi.dev/api/films"

const apiSettings = {
    fetchMovies: async (movieId) => {
      const endpoint = movieId ? `${API_URL}/${movieId}` : `${API_URL}`
      return await (await fetch(endpoint)).json();
    },
}

export default apiSettings