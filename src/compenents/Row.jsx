import React, { useEffect, useState } from 'react'
import instance from '../axios';

import './Row.css';

const base_url = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // instance.get(fetchUrl).then((res) => setMovies(res))
        async function fetchdata() {
            const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchdata()
    }, [fetchUrl])

    // console.log(movies)

    return (
        <div className='row'>
            <h2>{title}</h2>

            <div className="row__posters">
                {
                    movies.map((movie) => (
                        <img
                            key={movie.id}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Row