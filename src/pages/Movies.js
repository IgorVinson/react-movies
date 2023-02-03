import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    const updateQuery = (e) => {
        e.preventDefault()
        setQuery(e.target[0].value)
    }

    useEffect(() => {
        if (!query) return;
        axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`)
            .then(res => {
                const movies = res.data.results;
                setMovies(movies);
            })
    }, [query])


    return (
        <div>
            <form onSubmit={updateQuery}>
                <input type="text" placeholder="Search Movies"/>
                <button type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </div>
        </div>

    );
};

export default Movies;