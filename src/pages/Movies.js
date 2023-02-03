import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useLocation, useSearchParams} from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");

    const updateQuery = (e) => {
        e.preventDefault()
        setSearchParams({name: e.target[0].value})
    }

    useEffect(() => {
        if (!name) return;
        axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&query=${name}&language=en-US&page=1&include_adult=false`)
            .then(res => {
                const movies = res.data.results;
                setMovies(movies);
            })
    }, [name])


    return (
        <div>
            <h1>You can find movies here :</h1>
            <form onSubmit={updateQuery}>
                <input type="text" placeholder="Search Movies"/>
                <button type="submit">Search</button>
            </form>
            <div className="card-list">
                <ul>
                {movies.filter(movie => movie.poster_path).map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{from:location}}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
                </ul>
            </div>
        </div>

    );
};

export default Movies;