import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";

import { Badge } from "../components/badge";
import { MovieDetailsType } from "../types/movie-types";
import { getMovieDetails } from "../api";
import { MovieDetailTable } from "../components/movie.detail-table";
import { useFavorites } from "../context/favorites-context";
import { Loader } from "../components/loader";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovieDetails(id as string);
      setMovie(data);
    };
    fetchDetails();
  }, [id]);

  if (!movie) {
    return <Loader />;
  }

  const genres: string[] = movie.Genre.split(", ").map((genre) => genre.trim());
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  const handleFavorite = () => {
    if (isFavorite) {
      // Remove if already in favorites
      removeFavorite(movie.imdbID);
    } else {
      // Add if not in favorites
      addFavorite(movie);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-4 lg:gap-8 mb-20">
      <div className="flex">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-auto lg:h-full object-cover rounded-md"
        />
      </div>
      <div className="space-y-4 flex flex-col">
        <div className="shadow p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">{movie.Title}</h1>
            <button onClick={handleFavorite}>
              {isFavorite ? (
                <IoHeartSharp className="w-7 h-7" />
              ) : (
                <IoHeartOutline className="w-7 h-7" />
              )}
            </button>
          </div>
          <div className="flex items-center space-x-2 mt-3">
            <Badge label={movie.Year} />
            <Badge label={movie.Type} />
            <Badge label={movie.Rated} />
          </div>
        </div>
        <div className="shadow p-4 rounded-md">
          <h2 className="text-lg font-semibold">Movie Plot</h2>
          <p>{movie.Plot}</p>
          <div className="mt-4 flex space-x-2">
            {genres.map((genre, index) => (
              <Badge key={index} label={genre} />
            ))}
          </div>
        </div>
        <div className="shadow rounded-md flex-grow">
          <h2 className="p-4 text-lg font-semibold">Other Details</h2>
          <div className="relative flex flex-col w-full overflow-x-scroll lg:overflow-x-hidden text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
            <MovieDetailTable movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
