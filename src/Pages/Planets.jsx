import React, { useEffect, useState } from "react";
import axios from "axios";
import { PlanetCard, CardSkeleton, Pagination } from "../Components";

const Planets = () => {
  const [planets, setPlanets] = useState(null);
  const [planetUrl, setPlanetUrl] = useState("https://swapi.dev/api/planets/");

  useEffect(() => {
    axios
      .get(planetUrl)
      .then((res) => setPlanets(res?.data))
      .catch((res) => console.error(res))
      .finally(window.scroll(0, 0));
  }, [planetUrl]);

  return planets ? (
    <div className="w-full h-fit flex justify-center flex-wrap gap-5">
      {planets.results.map((item) => (
        <PlanetCard key={item.url} planet={item} />
      ))}
      <Pagination setData={setPlanets} setUrl={setPlanetUrl} data={planets} />
    </div>
  ) : (
    <div className="w-full h-fit flex flex-wrap justify-center gap-5">
      {Array.from({ length: 10 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
};

export default Planets;
