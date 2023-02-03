import React, {useEffect} from 'react';
import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import axios from "axios";
import './MovieDetails.Module.css'

const MovieDetails = () => {

    const {id} = useParams()
    const [movie, setMovie] = React.useState(null);


    useEffect(() => {
        async function getMovie() {
            const updateMovie = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`)
            setMovie(updateMovie.data)
        }
        getMovie()
    }, [id])

    return (
        <div className="movie-details">
            <h1 className="movie-details-title">{movie?.title}</h1>
            <img className="movie-details-poster" alt={`Poster for ${movie?.title}`}
                 src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}/>
            <p className="movie-details-score">User Score: {movie?.vote_average}</p>
            <p className="movie-details-overview">{movie?.overview}</p>
            <ul>
                <li>
                    <Link to="actors">Actors</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default MovieDetails;