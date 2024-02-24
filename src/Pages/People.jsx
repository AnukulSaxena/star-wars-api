import React, { useEffect, useState } from "react";
import { PeopleCard, CardSkeleton, Pagination } from "../Components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
const People = () => {
  const { peopleData } = useSelector((state) => state.home);
  const [people, setPeople] = useState(null);
  const [peopleUrl, setPeopleUrl] = useState("https://swapi.dev/api/people/");
  const { count } = useParams();
  const numCount = parseInt(count);

  useEffect(() => {
    if (numCount === -1) {
      setPeople(null);
      axios
        .get(peopleUrl)
        .then((res) => setPeople(res?.data))
        .catch((res) => console.error(res))
        .finally(window.scroll(0, 0));
    } else {
      console.log(peopleData);
      setPeople(peopleData);
    }
  }, [peopleUrl, peopleData, numCount]);

  return people ? (
    <div className="w-full h-fit flex justify-center flex-wrap gap-5">
      {people.results.map((item) => (
        <PeopleCard key={item.url} person={item} />
      ))}
      {count === "-1" && (
        <Pagination setData={setPeople} setUrl={setPeopleUrl} data={people} />
      )}
    </div>
  ) : (
    <div className="w-full h-fit flex flex-wrap justify-center gap-5">
      {Array.from({ length: numCount !== -1 ? numCount : 10 }).map(
        (_, index) => (
          <CardSkeleton key={index} />
        )
      )}
    </div>
  );
};

export default People;
