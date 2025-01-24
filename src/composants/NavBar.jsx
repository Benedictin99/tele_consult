import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="p-3 flex items-center ">
        <a
          href="#"
          className="font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
        >
          Tele
        </a>
        <h3 className="text-2xl font-bold uppercase sm:text-3xl text-blue-400">
          Consult
        </h3>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <ul>
            <li className="flex items-center gap-3 px-3 pr-10 text-xl">
              <a href="#" className="hover:text-blue-500">
                Accueil
              </a>
              <a href="#" className="hover:text-blue-500">
                Services
              </a>
              <a href="#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="p-3">
          <Button
            text="Commencer"
            bgColor="bg-blue-700"
            hoverColor="hover:bg-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
