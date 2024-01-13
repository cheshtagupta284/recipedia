import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./style.css";

interface MealSmallProps {
  id: string;
  name: string;
  thumb: string;
}

function MealSmall({ id, name, thumb }: MealSmallProps) {
  useEffect(() => {
    console.log("MealSmall");
  }, []);
  return (
    <Link to={`/meal/${id}`} className="mealsmall-link">
      <Card className="mealsmall" id={`meal-${id}`}>
        <Card.Img variant="top" src={thumb} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}

export default MealSmall;
