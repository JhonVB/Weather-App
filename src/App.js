import React, { useState } from "react";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import style from "./App.module.css";
import { Route } from "react-router-dom";
import Ciudad from "./components/Ciudad.jsx";

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(ciudad) {
    //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
    //pero de momento agregaremos una ciudad por default para ver que funcione
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=f9dbb859e7ab2e12c2fdaf73f77c88ef&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          //  setCities((oldCities) => [...oldCities, ciudad]);
          cities.length <= 4
            ? !cities.find((e) => e.id === ciudad.id)
              ? setCities([...cities, ciudad])
              : alert("Ciudad ya agregada")
            : alert("No puedes agregar más ciudades");
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  return (
    <div className={style.app}>
      <div className={style.bkg} />

      <div className={style.container}>
        <div>
          <Route path="/">
            <SearchBar onSearch={onSearch} />
          </Route>

          <Route path="/Ciudad/:id">
            <Ciudad cities={cities} />
          </Route>
        </div>

        <Route path="/">
          <div className={style.citiesContainer}>
            <Cards onClose={onClose} cities={cities} />
          </div>
        </Route>
      </div>
    </div>
  );
}

export default App;
