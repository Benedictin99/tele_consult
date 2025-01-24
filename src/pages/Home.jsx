import React from "react";
import NavBar from "../composants/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-between m-10">
        <div>
          <h1 className="text-3xl font-light px-5 py-5 justify-center items-center">
            L'application de suivi médicale en ligne à{" "}
            <span className="text-4xl text-blue-600 font-bold">Madagascar</span>
          </h1>
        </div>
        <div>
          <h3>Section photo</h3>
          <img
            src="/lock.png"
            alt="couverture"
            className="w-screen rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
