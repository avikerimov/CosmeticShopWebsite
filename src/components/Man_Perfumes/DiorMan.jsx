import React, { useState, useEffect } from "react";
import { Dior_Man_Carousel } from "../../services/Man_Perfumes/Dior_Man_Carousel";
import { Dior_Man_Perfumes } from "../../services/Man_Perfumes/Dior_Man_Perfumes";
import Card from "../Card";
import Carousel from "../Carousel";
import logo from "../../Pictures/Man_Purfumes/Dior/DiorLogo.png";

function DiorMan() {
  const [diorManPerfumes, setDiorManPerfumes] = useState([]);
  const [diorManCarousel, setDiorManCarousel] = useState([]);

  useEffect(() => {
    setDiorManPerfumes(Dior_Man_Perfumes());
    setDiorManCarousel(Dior_Man_Carousel());
  }, []);

  return (
    <React.Fragment>
      <div className="container text-center mb-5">
        <h1 className="d-none">Dior Man</h1>
        <img className="my-5" src={logo} alt="" />
        <Carousel carousel={diorManCarousel} />
        <h2>Hello</h2>
      </div>
      <div className="row">
        {diorManPerfumes.map((dior, i) => (
          <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3">
            <Card card={dior} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default DiorMan;
