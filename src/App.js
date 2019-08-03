import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Card() {
  return (
    <div className="card_">
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
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <div className="mainImageContainer">
            <img
              className="mainImage"
              src="https://rosting.by/upload/iblock/b8d/109518088.jpg"
            />
            <div className="titleContainer">
              <h1 className="title">Guests house coral</h1>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <Card /> {/*БЛОКИ*/}
          <Card />
        </div>
        <div className="col">
          <Card /> {/*БЛОКИ*/}
          <Card />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card_body">
              <h5 className="card-title">
                <h3>GUEST HOUSE CORAL</h3>
              </h5>
              <p>г.Анапа, Коралловый проезд, д.19</p>
              <p>+ 7(996)376-19-78</p>
              <a href="https://goo.gl/maps/3oANPpeMFu8qa7ja9" target="_blank">
                <button type="button" className="btn btn-outline-success">
                  КАРТА
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
