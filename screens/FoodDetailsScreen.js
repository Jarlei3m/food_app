import { Image, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";
import FoodDetails from "../components/FoodDetails";

export function FoodDetailsScreen({ route }) {
  const { foodId } = route.params;

  const selectedFood = MEALS.find((food) => food.id === foodId);

  return (
    <View>
      <Image source={{ uri: selectedFood.imageUrl }} />
      <Text>{selectedFood.title}</Text>

      <FoodDetails
        duration={selectedFood.duration}
        complexity={selectedFood.complexity}
        affordability={selectedFood.affordability}
      />

      <Text>Ingredients</Text>
      {selectedFood.ingredients.map((ingredient) => {
        return <Text key={ingredient}>{ingredient}</Text>;
      })}
      <Text>Steps</Text>
      {selectedFood.steps.map((step) => {
        return <Text key={step}>{step}</Text>;
      })}
    </View>
  );
}

export default FoodDetailsScreen;
