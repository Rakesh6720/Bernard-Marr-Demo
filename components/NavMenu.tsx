"use client";
import React, { useState } from "react";

const NavMenu = () => {
  const [selected, setSelected] = useState<boolean>(false);
  const clickHandler = () => {
    setSelected(!selected);
  };

  if (!selected) {
    return (
      <button className="cursor-pointer text-3xl" onClick={clickHandler}>
        &#9776;
      </button>
    );
  } else {
    return <div className="bg-red-500 w-64 h-64" onClick={clickHandler} />;
  }
};

export default NavMenu;
