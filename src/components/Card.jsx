import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="card_">
      <Link to="/rooms/1">
        <img
          src="http://remontik.org/wp-content/uploads/2016/09/11-2-1.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            <p>Номер целиком ·1 номер</p>
            <h4>Уютный семейный номер</h4>
            <p>1133₽ за ночь</p>
            <p>
              <strong> 2 отзыва</strong>
            </p>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
