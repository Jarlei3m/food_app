import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import FoodOverviewScreen from "./screens/FoodOverviewScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import FoodDetailsScreen from "./screens/FoodDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#ce1e3c",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#e2e2e2",
            },
          }}
        >
          <Stack.Screen
            name="FoodCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
          <Stack.Screen name="FoodDetails" component={FoodDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
