import Container from "react-bootstrap/Container";
import "./style.css";
import Button from "react-bootstrap/esm/Button";

export default function Home() {
  return (
    <>
      <header className="header">
        <Container className="hero-content">
          <h1 className="hero-heading1 mb-1">Recipedia</h1>
          <h3 className="mb-4">
            Discover Mouthwatering Recipes for Every Palate.
          </h3>
          <Button variant="light">Get Cooking</Button>
        </Container>
      </header>
    </>
  );
}
