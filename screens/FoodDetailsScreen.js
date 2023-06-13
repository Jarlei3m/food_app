import { Image, StyleSheet, Text, View, ScrollView } from "react-native";

import { MEALS } from "../data/dummy-data";
import FoodDetails from "../components/FoodDetails";
import Subtitle from "../components/FoodDetail/Subtitle";
import List from "../components/FoodDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

export function FoodDetailsScreen({ route, navigation }) {
  const { foodId } = route.params;

  function handleHeaderButtonPress() {
    console.log("pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={handleHeaderButtonPress}
          />
        );
      },
    });
  }, [navigation, handleHeaderButtonPress]);

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
