import { StyleSheet, FlatList, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import FoodItem from "../components/FoodItem";
import { useLayoutEffect } from "react";

function FoodOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  const foodList = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(categoryId);
  });

  const renderFoodItem = (itemData) => {
    const handleFoodSelect = () => {
      navigation.navigate("FoodDetails", {
        foodId: itemData.item.id,
      });
    };

    const item = itemData.item;
    const foodItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
      onPress: handleFoodSelect,
    };

    return <FoodItem {...foodItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={foodList}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
      />
    </View>
  );
}

export default FoodOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
