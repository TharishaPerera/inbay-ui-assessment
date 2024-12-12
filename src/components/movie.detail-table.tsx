import { FaStar } from "react-icons/fa";

import { MovieDetailsType } from "../types/movie-types";

export const MovieDetailTable = ({ movie }: { movie: MovieDetailsType }) => {
  return (
    <table className="w-full text-left table-auto min-w-max text-slate-800">
      <tbody>
        <tr className="hover:bg-slate-50">
          <td className="p-4">
            <p className="text-sm font-bold">Writer</p>
          </td>
          <td className="p-4">
            <p className="text-sm">{movie.Writer}</p>
          </td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="p-4">
            <p className="text-sm font-bold">Actors</p>
          </td>
          <td className="p-4">
            <p className="text-sm">{movie.Actors}</p>
          </td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="p-4">
            <p className="text-sm font-bold">Released</p>
          </td>
          <td className="p-4">
            <p className="text-sm">{movie.Released}</p>
          </td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="p-4">
            <p className="text-sm font-bold">IMDB Rating</p>
          </td>
          <td className="p-4 flex items-center">
            <FaStar className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-2" />
            <p className="text-sm">{movie.imdbRating}</p>
          </td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="p-4">
            <p className="text-sm font-bold">Awards</p>
          </td>
          <td className="p-4">
            <p className="text-sm">{movie.Awards}</p>
          </td>
        </tr>
        <tr className="hover:bg-slate-50">
          <td className="p-4">
            <p className="text-sm font-bold">Runtime</p>
          </td>
          <td className="p-4">
            <p className="text-sm">{movie.Runtime}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
