import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Login from "./features/login";
import SearchPage from "./pages/SearchPage";
import MovieDetail from "./pages/MovieDetail";
import CinemaList from "./pages/CinemaList";
import ChooseSeat from "../src/features/chooseSeat/index"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movie />} />
          <Route path="searchPage" element={<SearchPage />} />
          <Route path="movie/:id" element={<MovieDetail />} />
          <Route path="cinemas/:movieId" element={<CinemaList />} />
        </Route>
        <Route path="/login" element={<Login />} />
          <Route path="/chooseSeat" element={<ChooseSeat />} />
      </Routes>
    </div>
  );
}

export default App;
