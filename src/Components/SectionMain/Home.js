import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
const Home = () => {
  return (
    // <section id="home">
    //   <div id="overlay"></div>
    //   <Container className="h-100">
    //     <Row id="above" className="align-items-center">
    //       <Col xs="12" lg="6" className="z-3">
    //         <div className="">
    //           <Row className="flex-column justify-content-between align-items-start ">
    //             <Col>
    //               <div className="text-capitalize border p-3 " id="msg-welcome">
    //                 welcome all in my portfolio
    //               </div>
    //             </Col>
    //             <Col>
    //               <div className="text-capitalize py-3 display-3" id="identify">
    //                 hi! i'm motaz feras abo assi, <span id="writer"></span>
    //                 <span className="pointer fw-lighter text-secondary ">
    //                   |
    //                 </span>
    //               </div>
    //             </Col>
    //             <Col>
    //               <p className="py-3">
    //                 Hello Everyone , I have 2 year of Experience in Web
    //                 Development
    //               </p>
    //             </Col>
    //             <Col>
    //               <div className=" text-capitalize pe-3 d-flex " id="connect">
    //                 let's connect
    //                 <span className="icon-connect mx-2">
    //                   <div>
    //                     <FontAwesomeIcon icon={faArrowRight} />
    //                   </div>
    //                 </span>
    //               </div>
    //             </Col>
    //           </Row>
    //         </div>
    //       </Col>
    //       <Col xs="12" lg="6"  id="astronaut2" className="p-5">
    //         <div id="astronaut" className=" w-100 "></div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </section>

    <section id="home" className="pb-5">
      <div id="overlay"></div>
      <Container className="h-100 ">
        <div className="row hidden" id="above">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start z-3 left">
            <div className="text-capitalize border p-3 " id="msg-welcome">
              welcome all in my portfolio
            </div>
            <div className="text-capitalize py-3 display-3" id="identify">
              hi! i'm motaz feras abo assi, <span id="writer"></span>
              <span className="pointer fw-lighter text-secondary ">|</span>
            </div>
            <p className="py-3">
              Hello Everyone , I have 2 year of Experience in Web Development
            </p>
            <div className=" text-capitalize pe-3 d-flex " id="connect">
              let's connect
              <span className="icon-connect mx-2">
                <div>
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              </span>
            </div>
          </div>
          <div
            className=" col-12 col-lg-6  d-flex justify-content-center align-items-center right"
            id="astronaut2"
          >
            <div id="astronaut"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Home;

/*

    <section id="home">
      <div id="overlay"></div>
      <Container className="h-100">
        <Row id="above">
          <Row
            xs="12"
            lg="6"
            className=" flex-column justify-content-center align-items-start z-3"
          >
            <Col>
              <div className="text-capitalize border p-3 " id="msg-welcome">
                welcome all in my portfolio
              </div>
            </Col>
            <Col>
              <div className="text-capitalize py-3 display-3" id="identify">
                hi! i'm motaz feras abo assi, <span id="writer"></span>
                <span className="pointer fw-lighter text-secondary ">|</span>
              </div>
            </Col>
            <Col>
              <p className="py-3">
                Hello Everyone , I have 2 year of Experience in Web Development
              </p>
            </Col>
            <Col>
              <div className=" text-capitalize pe-3 d-flex " id="connect">
                let's connect
                <span className="icon-connect mx-2">
                  <div>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                </span>
              </div>
            </Col>
          </Row>
          <Row
            xs="12"
            lg="6"
            className="justify-content-center align-items-center"
            id="astronaut2"
          >
            <Col>
              <div id="astronaut"></div>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>



*/
