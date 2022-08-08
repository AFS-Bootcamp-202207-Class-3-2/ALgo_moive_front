import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Login from "./features/login";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="movie" element={<Movie />} />
          <Route path="movie/:id" element={<MovieDetail />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
