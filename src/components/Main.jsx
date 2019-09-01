import React from "react";
import Icons from "./Icons";
import Card from "./Card";
import rooms from "../resources/rooms";
import styled from "styled-components";


function Main() {
  const items = [];
  for (let i = 0; i < rooms.length; i += 2) {
    items.push(
      <div key={i} className="col">
        <Card room={rooms[i]} />
        <Card room={rooms[i + 1]} />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <MainImageContainer>
            <MainImage
              src="https://rosting.by/upload/iblock/b8d/109518088.jpg"
            />
            <TitleContainer>

  <Title className="title m-0">Guests house coral</Title>
            </TitleContainer>
          </MainImageContainer>
          </div>
        </div>
      <br />
      <div className="row">{items}</div>
      <div className="row">
        <div className="col">
          <div className="card">
            <CardBody className="card_body bg-dark">
              <h3 className="card-title text-white mt-3">GUEST HOUSE CORAL</h3>
              <p className="text-white">г.Анапа, Коралловый проезд, д.19</p>
              <p className="text-white">+ 7(996)376-19-78</p>
              <a href="https://goo.gl/maps/3oANPpeMFu8qa7ja9" target="_blank">
                <button type="button" className="btn btn-outline-success mb-3">
                  КАРТА
                </button>
              </a>
            </CardBody>
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
const Title = styled.h1`
 text-decoration: underline;
  color: white;
  font-size: 59px;
  font-family: "Saira Stencil One", cursive;
`;
const CardBody= styled.div`
text-align: center;
`;
const MainImage = styled.img`
  filter: brightness(70%) saturate(200%);
  height: 100%;
  width: 100%;
`;
const MainImageContainer = styled.div`
 position: relative;
  height: 300px;
`;
const TitleContainer = styled.div`
position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;