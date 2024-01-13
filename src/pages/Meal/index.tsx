import React from "react";
import { useParams } from "react-router-dom";

interface MealPageProps {
  mealId?: string;
}

export default function MealPage(props: MealPageProps) {
  const { mealId } = props;
  const { id } = useParams();
  return (
    <div>
      MealPage {id} {mealId}
    </div>
  );
}
