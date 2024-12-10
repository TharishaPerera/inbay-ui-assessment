import { useState } from "react";

import { Movie } from "../types/movie-types";
import { searchMovies } from "../api";
import { Search } from "../components/search";
import { MovieCard } from "../components/movie-card";
import { Message } from "../components/message";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    setMovies([]); // to clear the previous results
    try {
      const data = await searchMovies(query);
      if (data.data === "False") {
        setError(data.error);
      } else {
        if (Array.isArray(data.Search)) {
          setMovies(data.Search);
        } else {
          if (data.Search === undefined) {
            setMovies([]);
          }
          setMessage("No movies found for the given query!");
        }
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMovies([]);
    setMessage("");
  };

  loading && <p>Loading...</p>;

  return (
    <div className="mb-20">
      <div className="w-full flex justify-center items-center">
        <Search
          className="border border-gray-300 max-w-lg"
          onSearch={handleSearch}
          onReset={handleReset}
          showReset={movies?.length > 0 ? true : false}
        />
      </div>
      {movies.length === 0 && !loading && !error && (
        <Message
          message={message || "Search your favorite movies!"}
          variant="info"
        />
      )}
      {movies.length === 0 || loading || error ? (
        <div className="mt-12">
          {error && <Message message={error} variant="error" />}
        </div>
      ) : (
        <div className="mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
