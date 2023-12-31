import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useContext, useLayoutEffect } from "react";

import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";

import List from "../components/FoodDetail/List";
import IconButton from "../components/IconButton";
import FoodDetails from "../components/FoodDetails";
import Subtitle from "../components/FoodDetail/Subtitle";

export function FoodDetailsScreen({ route, navigation }) {
  const { foodId } = route.params;

  const { addFavorite, favoriteFoodIds, removeFavorite } =
    useContext(FavoritesContext);

  const isFavoriteFood = favoriteFoodIds.includes(foodId);

  function handleChangeFavoriteStatus() {
    isFavoriteFood ? removeFavorite(foodId) : addFavorite(foodId);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isFavoriteFood ? "star" : "star-outline"}
            color={isFavoriteFood ? "#FFD700" : "white"}
            onPress={handleChangeFavoriteStatus}
          />
        );
      },
    });
  }, [navigation, handleChangeFavoriteStatus]);

  const selectedFood = MEALS.find((food) => food.id === foodId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>

      <FoodDetails
        duration={selectedFood.duration}
        complexity={selectedFood.complexity}
        affordability={selectedFood.affordability}
      />

      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedFood.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedFood.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default FoodDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 34,
  },
  image: {
    width: "100%",
    height: 320,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
