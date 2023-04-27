"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {!open ? (
        <>
          <div className="hidden space-x-6 md:inline-flex items-center ml-auto">
            <ul className="flex">
              <li className="px-10 hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li className="px-10 hover:underline">
                <Link href="/about">About</Link>
              </li>
              <li className="pl-10 hover:underline">
                <Link href="/services">Services</Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden ml-auto cursor-pointer text-3xl">
            <button onClick={() => setOpen(!open)}>&#9776;</button>
          </div>
        </>
      ) : (
        <div onClick={() => setOpen(false)}>
          <div className="bg-red-400"></div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
