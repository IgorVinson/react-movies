import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./ui element/HeaderLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { useEffect, useState } from "react";
import axios from "axios";
import MovieDetails from "./components/MovieDetails";
import Actors from "./components/Actors";
import FullReviews from "./components/FullReviews";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&page=1`
      )
      .then((res) => {
        const movies = res.data.results;
        setMovies(movies);
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home movies={movies} />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<MovieDetails movies={movies} />}>
          <Route path="actors" element={<Actors />} />
          <Route path="reviews" element={<FullReviews />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/550?api_key=09a81fc3fc14cf6c137c7cc384131cf3
