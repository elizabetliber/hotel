import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const { room: { beds, price, id, reviews } } = props;
  return (
    <div className="card_">
      <Link to={`/rooms/${id}`}>
        <img
          src="http://remontik.org/wp-content/uploads/2016/09/11-2-1.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <p className="card-text">
            <p>Номер целиком · кровать {beds}</p>
            <h4>Уютный семейный номер</h4>
            <p>{price} руб. за ночь</p>
            <p>
              <strong>{reviews} отзыва</strong>
            </p>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
