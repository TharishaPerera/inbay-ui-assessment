import React from "react";
import { Link } from "react-router-dom";

import { Movie } from "../types/movie-types";

interface MovieCardProps {
  movie: Movie;
  className?: string;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div>
      <div className="w-full border space-y-2 p-2 rounded-lg shadow hover:shadow-lg hover:transform hover:scale-105 transition duration-200">
        <img
          src={movie.Poster}
          alt={movie.Title}
          className="w-full h-80 object-cover rounded"
        />
        <div>
          <h3 className="text-md font-semibold h-12">{movie.Title}</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500 font-bold">{movie.Year}</p>
            <p className="text-sm uppercase text-gray-950 font-medium bg-gray-300 px-4 rounded-md">
              {movie.Type}
            </p>
          </div>
        </div>
        <Link
          to={`/movie/${movie.imdbID}`}
          className="flex w-full uppercase font-semibold text-center justify-center text-gray-200 bg-gray-900 hover:bg-gray-700 px-4 py-1 rounded-md"
        >
          View Movie Details
        </Link>
      </div>
    </div>
  );
};
