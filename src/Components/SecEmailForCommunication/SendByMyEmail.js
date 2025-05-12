import {  Col, Container, Row } from "react-bootstrap";
import "./SendByMyEmail.css"

const SendByMyEmail = () => {
  return (
    <section  className="container-email p-1">
      <Container  id="SendByMyEmail" className="p-5">
        <Row className=" justify-content-between w-100">
          <Col xs="12" lg="6" className=" fw-bolder p-3 " id="infor">see my project at once<br/>& leave here Your e-mail address.</Col>
          <Col xs="12" lg="6" className=" d-flex justify-content-center align-items-center ">
            <div className="w-100" id="input-style-above-button" >
              <input type="text" placeholder="Email Address" />
              <button>Submit</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default SendByMyEmail;
