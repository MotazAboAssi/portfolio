import { Button, Col, Container, Image, Row } from "react-bootstrap";
import email from "../../images/email.png";
import SendByMyEmail from "../../SecEmailForCommunication/SendByMyEmail";
import "./GetInTouch.css";
import useAnimateRoute from "../hooks/useAnimatedRoute";
import Modals from "../Modals";
import { useEffect, useState } from "react";

const GetInTouch = () => {
  const animationRouteClass = useAnimateRoute();

  const [isCorrect, setIsCorrect] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const checkData = () => {
    let isSuccess = true;

    let inputs = document.querySelectorAll("#form>div>input");

    inputs.forEach((item) => {
      if (item.value === "") isSuccess = false;
    });

    let inputFN = document.querySelector(
      "#form>div>input[placeholder='First Name']"
    );
    let inputLN = document.querySelector(
      "#form>div>input[placeholder='Last Name']"
    );

    if (
      inputFN.value.trim().replace(/[^a-zA-Z\u0600-\u06FF]+/g, "") !==
        inputFN.value.trim() ||
      inputLN.value.trim().replace(/[^a-zA-Z\u0600-\u06FF]+/g, "") !==
        inputLN.value.trim()
    )
      isSuccess = false;

    let inputPhone = document.querySelector(
      "#form>div>input[placeholder='Phone No']"
    );

    let inputEmail = document.querySelector(
      "#form>div>input[type='email']"
    );
    if (
      inputPhone.value.trim().replace(/[^0-9,+-]+/g, "") !==
      inputPhone.value.trim()
    )
      isSuccess = false;

    setIsCorrect(isSuccess);
    setShowModal(true); // **إظهار المودال بعد التحقق**

    setTimeout(() => {
      if (isSuccess) {
        inputFN.value = "";
        inputLN.value = "";
        inputPhone.value = "";
        inputEmail.value = "";
      }
    }, 1000);
  };


  useEffect(() => {
    const observe = new IntersectionObserver((entries) => {
      console.log("here");
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
        else entry.target.classList.remove("show");
      });
    });
    const hiddenElement = document.querySelectorAll(".hidden");
    hiddenElement.forEach((item) => observe.observe(item));
  }, []);


  return (
    <section
      id="GetInTouch"
      className={` ${animationRouteClass} position-relative `}
    >   
      <Modals action={isCorrect} show={showModal} setShow={setShowModal} />
      <Container className=" p-3" id="cont-GetInTouch">
        <Row className=" hidden align-content-center">
          <Col lg="6" xs="12" className="left">
            <Image src={email} fluid />
          </Col>
          <Col xs="12" lg="6" className="right">
            <div>
              <Row id="form">
                <Col xs="12">
                  <h2 className="text-capitalize my-3 text-white fw-bolder">
                    get in touch
                  </h2>
                </Col>
                <Col xs="6" className="mb-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-100 input-style text-white text-capitalize"
                  />
                </Col>
                <Col xs="6" className="mb-3">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-100 input-style text-white text-capitalize"
                  />
                </Col>
                <Col xs="6" className="mb-3">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-100 input-style text-white"
                  />
                </Col>
                <Col xs="6" className="mb-3">
                  <input
                    type="text"
                    placeholder="Phone No"
                    className="w-100 input-style text-white"
                  />
                </Col>
                <Col xs="12">
                  <textarea
                    rows="10"
                    placeholder="Message"
                    className="w-100 input-style pt-1 text-white"
                  />
                </Col>
                <Col>
                  <Button
                    id="btn-send"
                    onClick={checkData}
                    className="mx-2 mt-3"
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <SendByMyEmail />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default GetInTouch;
