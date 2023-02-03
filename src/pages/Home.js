import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({movies}) => {
  return (
    <div>
        <h1>The most popular films: </h1>
        <ul className='movie-list'>
          {movies.map((movie) => (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                    {movie.title}
                </Link>
            </li>
            ))}
        </ul>
    </div>
  );
};

Home.propTypes = {
    movies: PropTypes.array,
}

export default Home;
