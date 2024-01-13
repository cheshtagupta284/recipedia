import React, { useEffect } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

interface IMealOfTheDay {
  meal: Record<string, any>;
}

export default function MealOfTheDay(props: IMealOfTheDay) {
  const { meal } = props;
  useEffect(() => {
    console.log(meal);
  }, []);
  return (
    <section className="home-section mealoftheday pt-0">
      <Container className="home-section-container">
        <Row xs={1} md={2} style={{ height: "100%" }}>
          <Col className="my-auto">
            <h2 className="mb-4">What's cooking today?</h2>
            <h4>{meal.Meal}</h4>

            <div className="instructions">
              <img
                src={meal.MealThumb}
                alt={meal.Meal}
                style={{
                  display: "block",
                  maxWidth: "200px",
                  maxHeight: "200px",
                  width: "auto",
                  height: "auto",
                  aspectRatio: "1/1",
                  borderRadius: "50%",
                  float: "right",
                  margin: "10px",
                  shapeOutside: "margin-box",
                }}
              />
              {meal.Instructions.split("\r\n\r\n")
                .slice(
                  0,
                  Math.min(3, meal.Instructions.split("\r\n\r\n").length)
                )
                .map((instruction: string) => (
                  <p>{instruction}</p>
                ))}
            </div>
            <Link to={`/meal/${meal.id}`}>Read More ...</Link>

            <Stack direction="horizontal" className="mt-2" gap={3}>
              <Link to={meal.Youtube}>
                <i className="bi bi-youtube"></i> Youtube
              </Link>
              <Link to={meal.Source}>
                <i className="bi bi-link-45deg"></i> Source
              </Link>
            </Stack>
          </Col>
          <Col className="mealofthday-image"></Col>
        </Row>
      </Container>
    </section>
  );
}
