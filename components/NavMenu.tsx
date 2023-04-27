import Link from "next/link";
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
    return (
      <div
        className="bg-red-500 z-10 w-[500px] h-[200px] mt-[200px]"
        onClick={clickHandler}
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
        </ul>
      </div>
    );
  }
};

export default NavMenu;
