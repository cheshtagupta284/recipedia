import Container from "react-bootstrap/Container";
import "./style.css";
import Button from "react-bootstrap/esm/Button";
import {
  getAllCategories,
  getMealByCategory,
  getMealById,
  getRandomMeal,
} from "../../services/services";
import { useContext, useEffect, useState } from "react";
import { isBefore } from "date-fns/isBefore";
import { format } from "date-fns/format";
import MealSmall from "../../components/Meals/MealSmall";
import { Card, Col, Row } from "react-bootstrap";
import { CommonDataContext } from "../../App";
import FeaturedMeals from "./FeaturedMeals";
import MealOfTheDay from "./MealOfTheDay";

interface IfeaturedMeals {
  title: string;
  meals: Array<any>;
}

export default function Home() {
  const [randomMeal, setRandomMeal] = useState<Record<string, string | null>>();
  const [featuredMeals, setFeaturedMeals] = useState<Array<IfeaturedMeals>>([]);

  const { allCategories, getData } = useContext(CommonDataContext);

  const setRandomMealFromService = async () => {
    if (randomMeal) {
      return;
    }
    let meal;
    if (
      isBefore(
        format(
          new Date(localStorage.getItem("mealoftheday_date") || 0),
          "yyyy-MM-dd"
        ),
        format(new Date(), "yyyy-MM-dd")
      ) ||
      !localStorage.getItem("mealoftheday")
    ) {
      meal = await getRandomMeal();
      localStorage.setItem("mealoftheday", meal?.id || "");
      localStorage.setItem("mealoftheday_date", new Date().toJSON());
    } else {
      meal = await getMealById(
        parseInt(localStorage.getItem("mealoftheday") || "0")
      );
    }
    console.log("Setting random meal");

    setRandomMeal(meal);
  };

  const setFeaturedMealsFromService = async () => {
    if (allCategories) {
      const featuredCategories = [allCategories[2], allCategories[7]];
      for (let category of featuredCategories) {
        const meals: Array<any> = await getMealByCategory(category.Category);
        setFeaturedMeals((prevState) => [
          ...prevState,
          {
            title: category.Category,
            meals: meals.slice(0, Math.min(meals.length, 3)),
          },
        ]);
      }
    }
  };

  useEffect(() => {
    console.log("Home", allCategories);
    setRandomMealFromService();
  }, []);

  useEffect(() => {
    console.log("Change", allCategories);
    setFeaturedMealsFromService();
  }, [allCategories]);

  return (
    <>
      <header className="header">
        <Container className="hero-content">
          <h1 className="hero-heading1 mb-4">Recipedia</h1>
          <h3 className="mb-4">
            Discover Mouthwatering Recipes for Every Palate.
          </h3>
          <Button variant="light">Get Cooking</Button>
        </Container>
      </header>
      <main>
        {randomMeal && <MealOfTheDay meal={randomMeal} />}
        {featuredMeals && <FeaturedMeals featuredMeals={featuredMeals} />}
      </main>
    </>
  );
}
