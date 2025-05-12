import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import useAnimateRoute from "../hooks/useAnimatedRoute/index";

import AlSham from "../../images/myProject/AlSham.jpg"
import Menu from "../../images/myProject/Menu.jpg"
import ProgrammersAgency from "../../images/myProject/ProgrammersAgency.jpg"
import ShoppingHours from "../../images/myProject/ShoppingHours.jpg"
import ShoppingLabtob from "../../images/myProject/ShoppingLabtob.jpg"
import ShoppingOnlineNike from "../../images/myProject/ShoppingOnline.jpg"

import "./MyWork.css";

const MyWork = () => {
  const animationRouteClass = useAnimateRoute();

  const dataMyProject = [
    { title: "Shopping Goods Nike from Website", img: ShoppingOnlineNike, URL: "https://github.com/MotazAboAssi/Template-6" },
    { title: "AlSham Website", img: AlSham, URL: "https://github.com/MotazAboAssi/Template-5" },
    { title: "Programmers Agency Website", img: ProgrammersAgency, URL: "https://github.com/MotazAboAssi/Template-1" },
    { title: "Shopping Hours from Website", img:ShoppingHours, URL: "https://github.com/MotazAboAssi/Template-2" },
    { title: "Menu Resturant", img: Menu, URL: "https://github.com/MotazAboAssi/Template-3" },
    { title: "Shopping Labtob from Website", img: ShoppingLabtob, URL: "https://github.com/MotazAboAssi/Template-4" },
  ];

  return (
    <section id="myWork" className={` ${animationRouteClass} w-100`}>
      <Container className="w-100 py-5 m-auto">
        <Row className=" justify-content-evenly ">
          {/* //////////////////////////////////// */}
          {dataMyProject.map((item, index) => (
            <Col
              xs="11"
              md="5"
              lg="3"
              id="work"
              className=" d-flex  justify-content-center align-items-center text-center position-relative"
              key={index}
            >
              <div id="overlay-project"></div>
              <Image src={item.img} className="position-absolute w-100 h-100" />
              <div id="above-work" className="z-1">
                <Row>
                  <h2 className="title-work text-capitalize">
                    {item.title}
                  </h2>
                </Row>
                <Row>
                  <p className="description-work text-capitalize fst-italic">
                    design && development
                  </p>
                  <a href={item.URL} target="_blank" className=" url-work d-block w-75 text-info m-auto text-capitalize fw-bolder text-decoration-none " rel="noreferrer">
                    more detail ....
                  </a>
                </Row>
              </div>
            </Col>
          ))}
          {/* //////////////////////////////////// */}
        </Row>
      </Container>
    </section>
  );
};

export default MyWork;
