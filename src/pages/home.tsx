import { useEffect, useState } from "react";

import { Movie } from "../types/movie-types";
import { searchMovies } from "../api";
import { Search } from "../components/search";
import { MovieCard } from "../components/movie-card";
import { Message } from "../components/message";
import { Loader } from "../components/loader";
import { Sort } from "../components/sort";
import { Placeholder } from "../components/placeholder-image";

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [sortKey, setSortKey] = useState<"Title" | "Year">("Title");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const handleSearch = async (query: string) => {
    if (!query) return; // skip empty searches

    // Update search history on local storage
    setSearchHistory((prevHistory) => {
      const updatedHistory = [
        query,
        ...prevHistory.filter((item) => item !== query),
      ];
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
      return updatedHistory;
    });

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

  const handleSort = (key: "Title" | "Year", order: "asc" | "desc") => {
    setSortKey(key);
    setSortOrder(order);

    const sortedMovies = [...movies].sort((first, second) => {
      const valueA = first[key];
      const valueB = second[key];

      if (valueA < valueB) return order === "asc" ? -1 : 1;
      if (valueA > valueB) return order === "asc" ? 1 : -1;
      return 0;
    });

    setMovies(sortedMovies);
  };

  const handleReset = () => {
    setMovies([]);
    setMessage("");
    setShowHistory(false);
  };

  const handleHistoryClick = (query: string) => {
    handleSearch(query);
  };
  const handleClearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
    handleReset();
  };

  // get search history from the local storage
  useEffect(() => {
    const savedHistory = JSON.parse(
      localStorage.getItem("searchHistory") || "[]"
    );
    setSearchHistory(savedHistory);
  }, []);

  if (loading) return<Loader />;

  return (
    <div className="mb-20">
      <div className="w-full flex flex-col justify-center items-center">
        <Search
          className="border border-gray-300 max-w-xl"
          onSearch={handleSearch}
          onReset={handleReset}
          showReset={movies?.length > 0 ? true : false}
          showHistory={showHistory}
          setShowHistory={setShowHistory}
        />
        <div className="bg-blue-100 relative max-w-2xl w-full z-50">
          {searchHistory.length > 0 && showHistory && (
            <div className="mt-2 w-full justify-start self-center bg-gray-100 px-4 py-3 rounded-lg shadow-lg absolute">
              <div className="flex justify-between items-center mb-2 p-2">
                <p className="font-semibold">Search History</p>
                <button
                  onClick={handleClearHistory}
                  className="text-red-500 underline hover:bg-red-100 px-2 py-1 rounded-md"
                >
                  Clear
                </button>
              </div>
              <ul className="list-none">
                {searchHistory.map((query, index) => (
                  <li key={index}>
                    <button
                      className="w-full text-start p-2 rounded-md hover:bg-gray-200"
                      onClick={() => {
                        handleHistoryClick(query);
                        setShowHistory(false);
                      }}
                    >
                      {query}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      {movies?.length > 0 && (
        <Sort handleSort={handleSort} sortKey={sortKey} sortOrder={sortOrder} />
      )}
      {movies.length === 0 && !loading && !error ? (
        message ? (
          <Message message={message} variant="info" />
        ) : (
          <Placeholder />
        )
      ) : null}
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
