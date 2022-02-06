import React, { Fragment, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logoImg } from "../../../assets/images";
import ButtonNav from "../../atoms/ButtonNav";
import ProfileNav from "../../atoms/ProfileNav";
import AdminNav from "../../atoms/AdminNav";
const Header = () => {
  const [state, setstate] = useState(false);

  const Login = () => {
    setstate(true);
  };

  console.log(state);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Link to="/">
            <img src={logoImg} alt="logo-1"></img>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto ">
              {state === false ? (
                <>
                  <ButtonNav />
                </>
              ) : (
                <ProfileNav />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
