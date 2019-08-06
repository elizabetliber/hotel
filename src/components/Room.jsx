import React from "react";

function Room() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card ">
            <div className="card-body">
              <h3 className="card-title text-center ">GUEST HOUSE CORAL</h3>
            </div>
            <div className="mainImageContainer text-center">
              <img
                className="mainImage "
                src="https://www.hotel-oreanda.com/assets/photo/rooms/klassicheskiy-odnomestnyy/hotel-oreanda-yalta-classic-single-02.jpg"
              />
              <a
                href="https://www.hotel-oreanda.com/assets/photo/rooms/klassicheskiy-odnomestnyy/hotel-oreanda-yalta-classic-single-02.jpg"
                target="_blank"
              >
                <button type="button" className="btn btn-light ">
                  ПОСМОТРЕТЬ ФОТО
                </button>
              </a>
              <br />

              <div className="text-justify">
                {" "}
                <h2>Уютный семейный номер</h2>
                <strong>номер целиком</strong>
                <p>3 гостя 1 спальня 2 кровати 1 душевая</p>
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
                <strong>1000Р</strong> за сутки
                <button type="button" className="btn btn-danger ">
                  Забронировать
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
