import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./ui element/HeaderLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
}

export default App;

// https://api.themoviedb.org/3/movie/550?api_key=09a81fc3fc14cf6c137c7cc384131cf3
