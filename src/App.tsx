import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./context/favorites-context"
import { Navbar } from "./components/navbar";
import Home from "./pages/home";
import Favorites from "./pages/favorites";
import MovieDetails from "./pages/movie-details";

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <div className="p-2">
          <Navbar />
          <div className="container mx-auto mt-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App
