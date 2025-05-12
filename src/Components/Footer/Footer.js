import { Col, Container, NavLink, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <Container>
        <Row className="d-flex align-items-center">
          <Col>
            <div className=" bg-black rounded-circle" id="logo"></div>
          </Col>
          <Col className="text-white">
            <ul id="icons-footer">
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
            <p className="copyRight text-capitalize">
              --copyright 2025-- all right reserved here by motaz abo assi
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Footer;
