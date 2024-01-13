import { Container } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./style.css";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="d-flex align-items-center">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block"
          />
          <p className="ms-2 mb-0"> Recipedia</p>
        </div>
        <div>
          <p>Baked and garnished with love at Recipedia.</p>
          <p>&copy;Copyright 2024</p>
          <p>Currently v1.0.0.</p>
        </div>
      </Container>
    </footer>
  );
}
