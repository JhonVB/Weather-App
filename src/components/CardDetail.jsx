import React, { useState, useEffect } from "react";
import style from "./CardDetail.module.css";
import { IoArrowUndoOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
export default function CardDetail({ city }) {
  const [detail, setDetail] = useState({
    clouds: "",
    id: "",
    img: "",
    latitud: "",
    longitud: "",
    max: "",
    min: "",
    name: "",
    temp: "",
    weather: "",
    wind: "",
  });

  useEffect(() => {
    setDetail(city);
  }, [city]);

  return (
    <div className={style.container}>
      <div className={style.card}>
        <NavLink to="/">
          <div className={style.btn}>
            <IoArrowUndoOutline />
          </div>
        </NavLink>
        <div className={style.leftColumn}>
          <span className={style.name}>{detail.name}</span>
          <img
            src={`http://openweathermap.org/img/wn/${detail.img}@2x.png`}
            alt=""
          />
          <div className={style.temps}>
            <div className={style.temp}>
              <span className={style.name}>Min°</span>
              <span>{detail.min}</span>
            </div>

            <div className={style.temp}>
              <span className={style.name}>Max°</span>
              <span>{detail.max}</span>
            </div>
          </div>
        </div>

        <div className={style.rightColumn}>
          <div className={style.row}>
            <span className={style.name}>Wind</span>
            <span>{detail.wind} Km/h</span>

            <span className={style.name}>Temp</span>
            <span>{detail.temp} ºC</span>

            <span className={style.name}>Weather</span>
            <span>{detail.weather}</span>
          </div>

          <div className={style.row}>
            <span className={style.name}>Clouds</span>
            <span>{detail.clouds}</span>

            <span className={style.name}>Latitud</span>
            <span>{detail.latitud} º</span>

            <span className={style.name}>Longitud</span>
            <span> {detail.longitud} º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
