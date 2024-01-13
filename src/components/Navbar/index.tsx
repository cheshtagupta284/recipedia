import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Navbar from "react-bootstrap/esm/Navbar";
import Offcanvas from "react-bootstrap/esm/Offcanvas";
import logo from "../../assets/logo.png";
import "./style.css";
import {
  getAllCategories,
  getAreasList,
  getIngredientsList,
} from "../../services/services";
import { InputGroup } from "react-bootstrap";
import { CommonDataContext } from "../../App";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { allCategories, allAreas, allIngredients } =
    useContext(CommonDataContext);

  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block"
            />
            <p className="d-none d-sm-block ms-2 mb-0"> Recipedia</p>
          </Navbar.Brand>
          <Form className="flex-grow-1 mx-md-4 nav-search">
            <InputGroup>
              <InputGroup.Text id="search-addon">
                <i className="bi bi-search-heart"></i>
              </InputGroup.Text>
              <Form.Control
                type="search"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="search-addon"
              />
            </InputGroup>
          </Form>
          <Button variant="light" onClick={handleShow} className="p-1 p-sm-2">
            <i className="icon bi-list"></i>
          </Button>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Categories</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {allCategories ? (
            JSON.stringify(allCategories)
          ) : (
            <p className="mb-0">No Catgories to show.</p>
          )}
          {allAreas ? (
            JSON.stringify(allAreas)
          ) : (
            <p className="mb-0">No Catgories to show.</p>
          )}
          {allIngredients ? (
            JSON.stringify(allIngredients)
          ) : (
            <p className="mb-0">No Catgories to show.</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
