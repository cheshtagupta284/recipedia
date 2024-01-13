import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import MealSmall from "../../components/Meals/MealSmall";

interface IFeaturedMeals {
  featuredMeals: Array<any>;
}

export default function FeaturedMeals(props: IFeaturedMeals) {
  const { featuredMeals } = props;
  return (
    <section className="home-section mx-auto text-center">
      <Container>
        <h2 className="mb-1">Featured Meals</h2>
        {featuredMeals?.map((featuredMeal: any) => {
          return (
            <div key={featuredMeal.title as string} className="my-4">
              <h4>{featuredMeal.title}</h4>
              {
                <Row
                  xs={1}
                  md={3}
                  gap={3}
                  className="g-4 mx-auto"
                  style={{ maxWidth: "1000px" }}
                >
                  {(featuredMeal.meals as Array<any>).map((meal) => (
                    <Col key={meal.id}>
                      <MealSmall
                        key={meal.id}
                        id={meal.id}
                        name={meal.Meal}
                        thumb={meal.MealThumb}
                      />
                    </Col>
                  ))}
                </Row>
              }
            </div>
          );
        })}
      </Container>
    </section>
  );
}
