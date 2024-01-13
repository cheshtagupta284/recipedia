import {
  formatMeal,
  formatCategory,
  formatRecord,
  formatIngredient,
} from "../utility/format";

const getRandomMeal = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    return formatMeal(data.meals[0]);
  } catch (error) {
    console.error(error);
  }
};

const getAllCategories = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();
    return data.categories.map(formatCategory);
  } catch (error) {
    console.error(error);
  }
};

const getIngredientsList = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
    );
    const data = await response.json();
    return data.meals.map(formatIngredient);
  } catch (error) {
    console.error(error);
  }
};

const getAreasList = async () => {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
    );
    const data = await response.json();
    return data.meals.map(formatRecord);
  } catch (error) {
    console.error(error);
  }
};

const getMealById = async (id: number) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id || 52772}`
    );
    const data = await response.json();
    return formatMeal(data.meals[0]);
  } catch (error) {
    console.error(error);
  }
};

const getMealByCategory = async (category: string) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await response.json();
    return data.meals.map(formatMeal);
  } catch (error) {
    console.error(error);
  }
};

const getMealByArea = async (area: string) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
    );
    const data = await response.json();
    return data.meals.map(formatMeal);
  } catch (error) {
    console.error(error);
  }
};

const getMealByIngredient = async (ingredient: string) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals.map(formatMeal);
  } catch (error) {
    console.error(error);
  }
};

export {
  getRandomMeal,
  getMealById,
  getAllCategories,
  getMealByCategory,
  getIngredientsList,
  getAreasList,
  getMealByArea,
  getMealByIngredient,
};
