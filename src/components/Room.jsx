import React, { useState } from "react";
import styled from "styled-components";
import { withRouter, Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";

import rooms from "../resources/rooms";

function Room(params) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const {
    match: {
      params: { id }
    }
  } = params;
  const room = rooms.find(el => el.id === id);
  const { beds, price, images, header_image } = room;

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Card>
            <div className="card-body">
              <Link className="nav-link" to="/">
                <Title className="card-title text-center text-dark">
                  GUEST HOUSE CORAL
                </Title>
              </Link>
            </div>
            <MainImageContainer className="mainImageContainer text-center">
            <MainImage src={header_image[0]} className="img-fluid" />


            <HeaderButton
            onClick={e => {
            e.preventDefault();
            setLightboxOpen(!lightboxOpen);
            }}
            >
            <button type="button" className="btn btn-light ">
            ПОСМОТРЕТЬ ФОТО
            </button>
            </HeaderButton>
            <br />
            {lightboxOpen && (
            <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={
            images[(photoIndex + images.length - 1) % images.length]
            }
            onCloseRequest={() => setLightboxOpen(!lightboxOpen)}
            onMovePrevRequest={() =>
            setPhotoIndex(
            (photoIndex + images.length - 1) % images.length
            )
            }
            onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
            }
            />
            )}

            <Info className="mt-4">
              <h2>Уютный семейный номер</h2>
              <strong>номер целиком</strong>
              <p>1 спальня {beds} кровати 1 душевая</p>
              <hr />
              <strong>Удобства в номере</strong>
              <ul>
                <li>Wi Fi</li>
                <li>Шампунь</li>
                <li>Гель для душа</li>
                <li>Фен</li>
                <li>Кондиционер</li>
              </ul>
              <strong>Общие удобства</strong>
              <ul>
                <li>Кухня</li>
                <li>Стиральная машина</li>
                <li>Сушильная машина</li>
              </ul>
              <hr />
              <h3>Правила</h3>
              <strong>Заезда</strong>
              <ul>
                <li>После 14 часов</li>
                <li>Необходим паспорт</li>
              </ul>
              <strong>Проживания</strong>
              <ul>
                <li>Тишина в номере после 21 часа</li>
              </ul>
              <strong>Выезда</strong>
              <ul>
                <li>До 12 часов</li>
              </ul>
              <br />
              <hr />

              <div className="d-flex justify-content-between">
                <em className="mt-2">
                  <strong>{price} руб.</strong> за сутки
                </em>
                <button type="button" className="btn btn-danger">
                  Забронировать
                </button>
              </div>
            </Info> </MainImageContainer>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Room);

const Info = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 430px;
  text-align: left;
`;

const MainImage = styled.img`
 max-width: 100%;
`;

const HeaderButton = styled.a`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 220px;
  width: 300px;
`;
const MainImageContainer = styled.div`
  position:relative;
  height: 300px;
`;
const Card = styled.div`
  height: 170px;
`;
const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-family: 'Lexend Exa', sans-serif;
font-family: 'Slabo 30px', serif;
`;