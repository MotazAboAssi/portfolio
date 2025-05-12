import { Container } from "react-bootstrap";
import CircularProgress from "../CircularProgress";
import { useEffect, useState } from "react";

import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./Skills.css";

const Skills = () => {
  const [numberCircular, setNumberCircular] = useState(1);
  useEffect(() => {
    const resizeScreen = () => {
      if (window.innerWidth <= 468) setNumberCircular(1);
      else if (window.innerWidth <= 980) setNumberCircular(2);
      else setNumberCircular(3);
    };
    resizeScreen();
    window.addEventListener("resize", resizeScreen);
    return () => window.removeEventListener("resize", resizeScreen);
  }, []);

  const DataProgressBar = [
    { percentage: 99, titleCaption: "computre Skills" },
    { percentage: 90, titleCaption: "backend development" },
    { percentage: 80, titleCaption: "cyber security" },
    { percentage: 95, titleCaption: "frontend development" },
    { percentage: 98, titleCaption: "algorithmes" },
  ];

  return (
    <section id="skills" className="">
      <Container
        id="container-skills"
        className=" text-center p-3 pt-5  bg-black"
      >
        <h2 className="text-white">Skills</h2>
        <p className="text-secondary">you can see what i have from skills</p>
        <div className="swiper-container p-5 text-light">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={numberCircular}
            navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }} // Custom buttons
            // pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            loop
          >
            {DataProgressBar.map((item, index) => (
              <SwiperSlide key={index}>
                <CircularProgress
                  percentage={item.percentage}
                  titleCaption={item.titleCaption}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="custom-prev">❮</div>
          <div className="custom-next">❯</div>
        </div>
      </Container>
    </section>
  );
};
export default Skills;
