import { StyleSheet, FlatList, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import FoodItem from "../components/FoodItem";

function FoodOverviewScreen({ route }) {
  const { categoryId } = route.params;

  const foodList = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(categoryId);
  });

  const renderFoodItem = (itemData) => {
    const item = itemData.item;
    const foodItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
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
