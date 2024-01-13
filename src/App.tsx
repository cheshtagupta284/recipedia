import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import logo from "./assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MealPage from "./pages/Meal";
import { createContext, useCallback, useEffect, useState } from "react";
import {
  getAllCategories,
  getAreasList,
  getIngredientsList,
} from "./services/services";

interface ICommonDataContext {
  getData?: () => Promise<void>;
  allCategories?: Array<any>;
  allAreas?: Array<any>;
  allIngredients?: Array<any>;
}

export const CommonDataContext = createContext<ICommonDataContext>({});

function App() {
  const [allCategories, setAllCategories] =
    useState<Array<Record<string, string | null>>>();
  const [allAreas, setAllAreas] =
    useState<Array<Record<string, string | null>>>();
  const [allIngredients, setAllIngredients] =
    useState<Array<Record<string, string | null>>>();

  const setAllCategoriesFromService = async () => {
    const categories = await getAllCategories();
    setAllCategories(categories);
  };

  const setAllAreasFromService = async () => {
    const areas = await getAreasList();
    setAllAreas(areas);
  };

  const setAllIngredientsFromService = async () => {
    const ingredients = await getIngredientsList();
    setAllIngredients(ingredients);
  };

  const getData = useCallback(async () => {
    await setAllCategoriesFromService();
    await setAllAreasFromService();
    await setAllIngredientsFromService();
  }, []);

  useEffect(() => {
    getData();
    console.log("App");
  }, []);

  return (
    <CommonDataContext.Provider
      value={{ getData, allAreas, allCategories, allIngredients }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealPage />} />
      </Routes>
      <Footer />
    </CommonDataContext.Provider>
  );
}

export default App;
