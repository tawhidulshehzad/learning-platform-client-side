// Right side nav column
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import LeftSideNav from "../Pages/Shared/LeftSideNav/LeftSideNav";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="4">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
