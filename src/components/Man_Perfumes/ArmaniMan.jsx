import React, { useState, useEffect } from "react";
import { Armani_Man_Carousel } from "../../services/Man_Perfumes/Armani_Man_Carousel";
import { Armani_Man_Perfumes } from "../../services/Man_Perfumes/Armani_Man_Perfumes";
import Card from "../Card";
import Carousel from "../Carousel";
import logo from "../../Pictures/Man_Purfumes/Armani/ArmaniLogo.png"

function ArmaniMan() {
  const [armaniManPerfumes, setArmaniManPerfumes] = useState([]);
  const [armaniManCarousel, setArmaniManCarousel] = useState([]);

  useEffect(() => {
    setArmaniManPerfumes(Armani_Man_Perfumes());
    setArmaniManCarousel(Armani_Man_Carousel());
  }, []);

  return (
    <React.Fragment>
      <div className="container text-center mb-5">
        <h1 className="d-none">Armani Man</h1>
        <img className="my-5" src={logo} alt="" style={{width:"20rem"}}/>
        <Carousel carousel={armaniManCarousel} />
      </div>
      <div className="row">
        {armaniManPerfumes.map((Armani, i) => (
          <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3">
            <Card card={Armani} />            
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ArmaniMan;
