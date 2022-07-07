import React from "react";
import Card from "./Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  return (
    <div className={style.cards}>
      {props.cities ? (
        props.cities.map((e) => {
          return (
            <Card
              key={e.name}
              max={e.max}
              min={e.min}
              name={e.name}
              img={e.img}
              onClose={() => props.onClose(e.id)}
              id={e.id}
            />
          );
        })
      ) : (
        <h3>No hay ciudades por mostrar</h3>
      )}
    </div>
  );
}
