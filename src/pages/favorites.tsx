import { IoCloseSharp } from "react-icons/io5";

import { Message } from "../components/message";
import { MovieCard } from "../components/movie-card";
import { useFavorites } from "../context/favorites-context";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="mb-20">
      <h1 className="text-2xl font-semibold capitalize text-center mb-4">
        My favorite movies
      </h1>
      {favorites.length === 0 ? (
        <Message message="No favorites yet. Add some movies!" variant="info" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="relative">
              <MovieCard movie={movie} />
              <button
                onClick={() => removeFavorite(movie.imdbID)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded"
              >
                <IoCloseSharp className="w-6 h-6" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
