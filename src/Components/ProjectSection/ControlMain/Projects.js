import { NavLink } from "react-router-dom";
import "./Projects.css";
import { useState } from "react";

const Projects = () => {
  const linkSection = ({ isActive }) => {
    return {
      background: isActive ? "rgb(154 53 138)" : "gray",
      color: isActive ? "white !important" : "black",
    };
  };
  return (
    <section id="projects" className="pb-5">
      <div className="text-center">
        <h2 className="text-white text-capitalize">my projects</h2>
        <p className="text-secondary">
          this section represent collections from my work.
        </p>
      </div>
      <div
        id="link-section"
        className="w-75 m-auto row rounded-pill text-center"
      >
        <NavLink
          style={linkSection}
          to=""
          className="col-4 text-decoration-none rounded-start-pill fw-bolder"
        >
          1st Section
        </NavLink>
        <NavLink
          style={linkSection}
          to="/GetInTouch"
          className="col-4 text-decoration-none fw-bolder"
        >
          2nd Section
        </NavLink>
        <NavLink
          style={linkSection}
          to="/PersonalInfo"
          className="col-4 text-decoration-none rounded-end-pill fw-bolder"
        >
          3rd Section
        </NavLink>
      </div>
    </section>
  );
};
export default Projects;

/*

<NavLink
  className={({ isActive }) => `col-4 text-decoration-none text-dark rounded-start-pill  ${linkSection({ isActive })}`}
  to=""
>
  1st Section
</NavLink>
<NavLink
  className={({ isActive }) => `col-4 text-decoration-none text-dark ${linkSection({ isActive })}`}
  to="/GetInTouch"
>
  2nd Section
</NavLink>
<NavLink
  className={({ isActive }) => `col-4 text-decoration-none text-dark rounded-end-pill  ${linkSection({ isActive })}`}
  to="/PersonalInfo"
>
  3rd Section
</NavLink>


*/

/*


        <NavLink
          style={linkSection}
          to=""
          className="col-4 text-decoration-none rounded-start-pill text-dark"
        >
          1st Section
        </NavLink>
        <NavLink
          style={linkSection}
          to="/GetInTouch"
          className="col-4 text-decoration-none text-dark"
        >
          2nd Section
        </NavLink>
        <NavLink
          style={linkSection}
          to="/PersonalInfo"
          className="col-4 text-decoration-none rounded-end-pill text-dark"
        >
          3rd Section
        </NavLink>
      

*/
