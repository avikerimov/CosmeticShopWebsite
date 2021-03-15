import React, { useState } from "react";

function Card({ card }) {
  const [readMore, setReadMore] = useState(false);
  const btnReadMore = readMore ? "הסתר" : "קרא עוד";
  return (
    <div className="card text-center ml-1">
      <img src={card.cardImg} className="card-img-top" alt={card.cardTitle} />

      <div className="card-body pt-3" /* style={{minHeight:"18rem"}} */>
        <h3 className="card-title pt-3">{card.cardTitle}</h3>
        <p className="card-text pt-3">{card.cardText}</p>
        <p>{readMore && card.extraText}</p>
        {card.extraSpace ? (
          <div>
            <br />
            <br />
          </div>
        ) : card.space ? (
          <br />
        ) : (
          ""
        )}
        <button
          type="button"
          className="read-more-btn btn btn-outline-info showMoreBtn"
          onClick={() => {
            setReadMore(!readMore);
          }}
        >
          <span>{btnReadMore}</span>
        </button>
      </div>

      <div className="card-footer">
        <a href="#" className="w-100 btn btn-primary">
          הוסף לסל
        </a>
      </div>
    </div>
  );
}

export default Card;
