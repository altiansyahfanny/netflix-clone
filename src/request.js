const API_KEY = '9185676649e34535ae83ab25dbbf5af0';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTg1Njc2NjQ5ZTM0NTM1YWU4M2FiMjVkYmJmNWFmMCIsInN1YiI6IjVmNjM0NWZjMDY5ZjBlMDAzNGE4OTMzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KDpw5ZIj1hxVFu0GHBM6wC12qXic6xBNBJJ6t9r7uxI';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;