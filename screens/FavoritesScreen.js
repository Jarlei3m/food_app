import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import FoodList from "../components/FoodList/FoodList";

function FavoritesScreen() {
  const { favoriteFoodIds } = useContext(FavoritesContext);

  const favoriteFoods = MEALS.filter((food) =>
    favoriteFoodIds.includes(food.id)
  );

  if (!favoriteFoods.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite foods yet.</Text>
      </View>
    );
  }

  return <FoodList foodList={favoriteFoods} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ce1e3c",
  },
});
