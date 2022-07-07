import React from "react";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";
import { BsFillCloudSlashFill } from "react-icons/bs";

export default function Card({ max, min, name, img, onClose, id }) {
  // acá va tu código
  return (
    <div className={style.card}>
      <span className={style.name}>
        <NavLink to={`/Ciudad/${id}`}>{name}</NavLink>
        <button className={style.btn} onClick={() => onClose()}>
          <BsFillCloudSlashFill />
        </button>
      </span>

      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
      <div className={style.temps}>
        <div className={style.temp}>
          <span>Min°</span>
          <span>{min}</span>
        </div>

        <div className={style.temp}>
          <span>Max°</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  );
}
