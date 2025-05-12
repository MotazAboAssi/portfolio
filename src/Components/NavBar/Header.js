import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Col, NavLink, Row } from "react-bootstrap";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

     if(window.innerWidth <= 991 && window.scrollY <= 50)
      {
        let x  = document.getElementById('navbar')
        x.style.background = "rgb(3, 2, 21)"
      }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "navbar scrolled" : "navbar"}
      id="navbar"
    >
      <Container>
        <Navbar.Brand href="#home" className=" justify-content-start">
          <div className=" bg-black rounded-circle" id="logo"></div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className=" bg-white fs-3"
        />
        <Navbar.Collapse id="basic-navbar-nav" className=" justify-content-end">
          <Nav
            className="w-75 justify-content-end align-items-lg-center align-items-start p-3"
            id="link-header"
          >
            <Row className="w-100 align-items-center  ">
              <Col lg="6">
                <nav className=" row justify-content-between text-lg-center align-items-center">
                  <Nav.Link
                    className="p-3 mb-lg-0 mb-3 col-lg-4 text-decoration-none"
                    href="#home"
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    className="p-3 mb-lg-0 mb-3 col-lg-4 text-decoration-none"
                    href="#skills"
                  >
                    Skills
                  </Nav.Link>
                  <Nav.Link
                    className="p-3 mb-lg-0 mb-3 col-lg-4 text-decoration-none "
                    href="#projects"
                  >
                    Projects
                  </Nav.Link>
                </nav>
              </Col>
              <Col lg="6">
                <div>
                  <Row className="  align-items-center ">
                    {/* ////////////////////////////////// */}
                    <Col xs="6" className="">
                      <ul id="icons-header" className=" p-0">
                        <li>
                          <NavLink target="_blank" href="">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                          </NavLink>
                        </li>
                        <li>
                          <NavLink target="_blank" href="https://github.com/MotazAboAssi">
                            <FontAwesomeIcon icon={faGithub} />
                          </NavLink>
                        </li>
                        <li>
                          <NavLink>
                            <FontAwesomeIcon target="_blank" icon={faFacebookF} />
                          </NavLink>
                        </li>
                      </ul>
                    </Col>
                    {/* ////////////////////////////////// */}
                    <Col  xs="6" className="">
                      <div
                        className="text-capitalize text-center "
                        id="box-connect"
                      >
                        <div id="above" className="heroImg text-capitalize">
                          let's connect
                        </div>
                        <div>
                          <div className="db"></div>
                          <div className="da"></div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
