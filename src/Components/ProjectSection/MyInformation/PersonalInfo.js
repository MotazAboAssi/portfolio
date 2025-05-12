import { Container } from "react-bootstrap";
import useAnimateRoute from "../hooks/useAnimatedRoute/index"
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const animationRouteClass = useAnimateRoute();
  return (
    <section id="PersonalInfo" className={` ${animationRouteClass} bg-black text-white p-5`}>
      <Container>
        <p className="text-capitalize text-center m-auto  fw-bolder">
          my name is
          <em>
            <u> motaz abo assi</u>
          </em>
          , i live in Damscuse Sahnaya, this is 7th proj in react Dev ..
        </p>
      </Container>
    </section>
  );
};
export default PersonalInfo;
