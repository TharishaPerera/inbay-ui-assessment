import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;

export const searchMovies = async (title: string) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&s=${title}`);
  return response.data;
};

export const getMovieDetails = async (imdbID: string) => {
  const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`);
  return response.data;
};