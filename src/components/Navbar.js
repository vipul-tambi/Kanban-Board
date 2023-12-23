import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import filterIcon from "../Assets/Images/Tuning.svg";
import downIcon from "../Assets/Images/Down.svg";
import "./Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
const NavBar = (props) => {
  const [toggle, setToggle] = useState(false);

  const groupingValue = props.groupingValue;
  const saveGroupingToLocalStorage = props.saveGroupingToLocalStorage;
  const orderingValue = props.orderingValue;
  const saveOrderingToLocalStorage = props.saveOrderingToLocalStorage;

  const handleToggle = (e) => {
    console.log(toggle);
    setToggle(!toggle);
  };
  return (
    <>
      <Col>
        <Navbar
          className="bg-body-transparent"
          style={{ backgroundColor: "white" }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item
                className="Button"
                onClick={() => {
                  console.log("11111");
                  setToggle(!toggle);
                }}
              >
                <img src={filterIcon} alt="icon" width="15" height="15" />
                Display
                <div className={`rotate-container ${toggle ? "rotated" : ""}`}>
                  <img
                    src={downIcon}
                    alt="icon"
                    width="15"
                    height="15"
                    className="downicon"
                    id="rotatingImage"
                  />
                </div>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {toggle && (
          <Col xs={8} sm={6} md={4} lg={3} className="toggleClass">
            <div
              style={{
                marginTop: "-5px",
                marginLeft: "20px",
                border: "1px solid #e6e7eb",
                padding: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 0 8px 0 #0000001a",
              }}
            >
              <Row
                style={{
                  margin: "5px",
                  color: "gray",
                }}
              >
                <Col>
                  <p>Grouping</p>
                </Col>
                <Col>
                  <select
                    style={{
                      borderColor: "#e6e7eb",
                      borderRadius: "0.2em",
                      padding: "0.3em",
                    }}
                    onChange={function (e) {
                      saveGroupingToLocalStorage(e.target.value.toString());
                    }}
                    value={groupingValue}
                  >
                    <option value="status">Status</option>
                    <option value="users">User</option>
                    <option value="priority">Priority</option>
                  </select>
                </Col>
              </Row>

              <Row
                style={{
                  margin: "5px",
                  color: "gray",
                }}
              >
                <Col sz={6}>
                  <p>Ordering</p>
                </Col>
                <Col sz={6}>
                  <select
                    style={{
                      borderColor: "#e6e7eb",
                      borderRadius: "0.2em",
                      padding: "0.3em",
                    }}
                    onChange={function (e) {
                      saveOrderingToLocalStorage(e.target.value.toString());
                    }}
                    value={orderingValue}
                  >
                    <option value="title">Title</option>
                    <option value="priority">Priority</option>
                  </select>
                </Col>
              </Row>
            </div>
          </Col>
        )}
      </Col>
    </>
  );
};

export default NavBar;
