import React, { useState } from "react";
import style from "./SearchBar.module.css";
import { IoAddSharp, IoHomeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState(" ");

  const seacrhCity = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={style.searchbar}>
      <NavLink to="/">
        <div className={style.btn}>
          <IoHomeOutline />
        </div>
      </NavLink>
      <input
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => (e.key == "Enter" ? seacrhCity(e) : null)}
        type="text"
        placeholder="Ciudad..."
        value={input}
      />
      <button className={style.btn} onClick={(e) => seacrhCity(e)}>
        <IoAddSharp />
      </button>
    </div>
  );
}
