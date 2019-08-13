import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
          <CardText className="card-text">
            <p>Номер целиком · кровать {beds}</p>
            <NameOfCards>Уютный семейный номер</NameOfCards>
            <p>{price} руб. за ночь</p>
            <p>
              <strong>{reviews} отзыва</strong>
            </p>
          </CardText>
        </div>
      </Link>
    </div>
  );
}

export default Card;
const NameOfCards = styled.h4`
 font-size: 19px;
`;
const CardText = styled.p`
 text-align: left;
  font-size: 18px;
  line-height: 0.5;
`;