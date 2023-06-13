import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FoodOverviewScreen from "./screens/FoodOverviewScreen";
import CategoriesScreen from "./screens/CategoriesScreen";
import FoodDetailsScreen from "./screens/FoodDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

import { Ionicons } from "@expo/vector-icons";
import { FavoritesProvider } from "./store/context/favorites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ce1e3c",
        },
        headerTintColor: "white",
        drawerStyle: {
          backgroundColor: "#ce1e3c",
          borderBottomRightRadius: 128,
        },
        drawerContentStyle: {
          backgroundColor: '#ce1e3c"',
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#ce1e3c",
        drawerActiveBackgroundColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavoritesProvider>
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
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
            <Stack.Screen
              name="FoodDetails"
              component={FoodDetailsScreen}
              options={{
                title: "About the Meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesProvider>
    </>
  );
}

const styles = StyleSheet.create({});
