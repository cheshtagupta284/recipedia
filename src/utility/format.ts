const formatMeal = (meal: Record<string, string | null>) => {
  const formattedMeal: Record<string, string | null> = {};
  formattedMeal.id = meal.idMeal;
  return { ...formattedMeal, ...formatRecord(meal) };
};

const formatCategory = (category: Record<string, string | null>) => {
  const formattedCategory: Record<string, string | null> = {};
  formattedCategory.id = category.idCategory;
  return { ...formattedCategory, ...formatRecord(category) };
};

const formatIngredient = (ingredient: Record<string, string | null>) => {
  const formattedIngredient: Record<string, string | null> = {};
  formattedIngredient.id = ingredient.idIngredient;
  return { ...formattedIngredient, ...formatRecord(ingredient) };
};

const formatRecord = (record: Record<string, string | null>) => {
  const formattedRecord: Record<string, string | null> = {};
  for (let key in record) {
    if (key.startsWith("str")) {
      formattedRecord[key.slice(3)] = record[key];
    }
  }
  return formattedRecord;
};

export { formatMeal, formatCategory, formatRecord, formatIngredient };
