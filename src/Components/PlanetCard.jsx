import React from "react";
import axios from "axios";
import { setPeople } from "../store/homeSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PlanetCard = ({ planet }) => {
  const { people } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleResidentClick() {
    const newPeople = { ...people };
    newPeople.results = null;
    dispatch(setPeople(newPeople));
    navigate("/people/2");

    Promise.allSettled(planet.residents.map((item) => axios.get(item))).then(
      (res) => {
        const filterData = res.map((item) => {
          if (item.status === "fulfilled") return item.value.data;
        });
        const filterPeople = { ...people };
        filterPeople.results = [...filterData];
        dispatch(setPeople(filterPeople));
      }
    );
  }
  return (
    <div className="dark:text-neutral-400 hover:bg-white hover:dark:bg-neutral-800 transit ease-in-out duration-500 p-5 min-h-80 w-80  hover:shadow-2xl rounded-md border border-neutral-600">
      <h1 className=" font-bold dark:text-neutral-200 text-neutral-900 text-5xl pb-5 border-b border-neutral-500">
        {planet.name}
      </h1>

      <div className="flex pt-2 w-full no-scrollbar overflow-x-scroll">
        Terrain:
        {planet.terrain.split(",").map((item, index) => (
          <div
            className={`${index !== 0 ? "border-l border-neutral-500 " : ""} px-2 capitalize whitespace-nowrap`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex pt-2 w-full no-scrollbar overflow-x-scroll">
        Cliamte:
        {planet.climate.split(",").map((item, index) => (
          <div
            className={`${index !== 0 ? "border-l  border-neutral-500 " : ""} px-2 capitalize whitespace-nowrap`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>

      <p className="pt-2">Diameter: {planet.diameter}</p>
      <p className="pt-2">Population: {planet.population}</p>
      <div className="flex text-lg gap-10 py-2">
        <p>Rotation: {planet.rotation_period}</p>
        <p>Orbit: {planet.orbital_period}</p>
      </div>
      <div className="flex px-5 justify-center pt-5 border-t border-neutral-500">
        <button
          onClick={handleResidentClick}
          className="dark:bg-neutral-700 bg-neutral-300 w-fit px-10 py-1 rounded-sm"
        >
          Residents
        </button>
      </div>
    </div>
  );
};

export default PlanetCard;
