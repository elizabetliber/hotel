import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Card() {
  return (
    <div className="card">
      <img src="http://remontik.org/wp-content/uploads/2016/09/11-2-1.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
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

      <div className="row">
        <div className="col">
          <Card />
          <Card />
        </div>
        <div className="col">
          <Card />
          <Card />
        </div>
      </div>
      <div className="io">
        <div className="footer">
          <h3>GUEST HOUSE CORAL</h3>
          <p>г.Анапа, Коралловый проезд, д.19</p>
          <p>+ 7(996)376-19-78</p>
          <br />
          <a href="https://goo.gl/maps/3oANPpeMFu8qa7ja9" target="_blank">
            <input type="submit" value="КАРТА" />
          </a>
          <div className="box"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
