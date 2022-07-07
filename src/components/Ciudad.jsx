import { useParams, useHistory } from "react-router-dom";
import Card from "./Card";
import CardDetail from "./CardDetail";
import style from "./Cards.module.css";
export default function Ciudad(props) {
  const params = useParams();
  const history = useHistory();
  const city = props.cities.find((e) => e.id === parseInt(params.id));
  if (!city) {
    history.push("/");
    alert("Ciudad eliminada");
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
  } else {
    return (
      <div>
        <CardDetail city={city} />
      </div>
    );
  }
}
