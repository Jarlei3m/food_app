import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import FoodList from "../components/FoodList/FoodList";

function FoodOverviewScreen({ route, navigation }) {
  const { categoryId } = route.params;

  const foodList = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.includes(categoryId);
  });

  // const handleFoodSelect = (selectedFoodId) => {
  //   navigation.navigate("FoodDetails", {
  //     foodId: selectedFoodId,
  //   });
  // };

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <FoodList foodList={foodList} />;
}

export default FoodOverviewScreen;
