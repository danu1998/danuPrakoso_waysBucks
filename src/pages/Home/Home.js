import React from "react";
import { Container } from "react-bootstrap";
import Margin from "../../components/atoms/Margin";
import Display from "../../components/moleculs/Display";
import Header from "../../components/moleculs/Header";
import Products from "../../components/moleculs/Products";
import NotifTransaction from "../../components/atoms/NotifTransaction";
const Home = () => {
  return (
    <div>
      <Header />
      <Margin />
      <Container>
        <Display />
      </Container>
      <Margin />
      <Container>
        <Products />
      </Container>
    </div>
  );
};

export default Home;
