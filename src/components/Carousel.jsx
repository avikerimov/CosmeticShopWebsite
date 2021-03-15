import React from "react";

function Carousel({carousel}) {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        {carousel.map((pic,i) => (
          <li
            key={i}
            data-target="#carouselExampleIndicators"
            data-slide-to={pic.picNum}
            className="active"
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {carousel.map((pic, i) => (
          <div key={i}
            className={pic.active ? "carousel-item active" : "carousel-item"}
          >
            <img src={pic.img} className="d-block w-100" alt={pic.imgAlt} />
          </div>
        ))}
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
