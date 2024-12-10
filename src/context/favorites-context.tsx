import React, { createContext, useState, useContext } from "react";

import { Movie } from "../types/movie-types";

interface FavoritesContextProps {
    favorites: Movie[];
    addFavorite: (movie: Movie) => void;
    removeFavorite: (imdbID: string) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Movie[]>(
        JSON.parse(localStorage.getItem("favorites") || "[]")
    );

    const addFavorite = (movie: Movie) => {
        setFavorites((prev) => {
            const updated = [...prev, movie];
            localStorage.setItem("favorites", JSON.stringify(updated));
            return updated;
        })
    }

    const removeFavorite = (imdbID: string) => {
        setFavorites((prev) => {
            const updated = prev.filter((movie) => movie.imdbID !== imdbID);
            localStorage.setItem("favorites", JSON.stringify(updated));
            return updated;
        })
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) throw new Error("useFavorites must be used within a FavoritesProvider");
    return context;
}