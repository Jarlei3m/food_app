import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  favoriteFoodIds: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

export function FavoritesProvider({ children }) {
  const [favoriteFoodIds, setFavoriteFoodIds] = useState([]);

  const addFavorite = (foodId) => {
    setFavoriteFoodIds((prevIds) => [...prevIds, foodId]);
  };

  const removeFavorite = (foodId) => {
    setFavoriteFoodIds((prevIds) => prevIds.filter((id) => id !== foodId));
  };

  const contextValues = {
    favoriteFoodIds: favoriteFoodIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={contextValues}>
      {children}
    </FavoritesContext.Provider>
  );
}
