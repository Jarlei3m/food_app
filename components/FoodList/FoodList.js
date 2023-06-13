import { FlatList, StyleSheet, View } from "react-native";
import FoodItem from "./FoodItem";

function FoodList({ foodList }) {
  const renderFoodItem = (itemData) => {
    const item = itemData.item;

    const foodItemProps = {
      id: item.id,
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

export default FoodList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
