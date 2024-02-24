import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PeopleCard, CardSkeleton, Pagination } from "../Components";
import { setPeopleUrl } from "../store/homeSlice";
import { useParams } from "react-router-dom";

const People = () => {
  const [peopleData, setPeopleData] = useState(null);
  const { people } = useSelector((state) => state.home);
  const { count } = useParams();
  const numCount = parseInt(count);
  console.log(numCount);
  useEffect(() => {
    setPeopleData(people?.results);
  }, [people]);

  return peopleData ? (
    <div className="w-full h-fit flex justify-center flex-wrap gap-5">
      {peopleData.map((item) => (
        <PeopleCard key={item.url} person={item} />
      ))}
      {count === "-1" && (
        <Pagination
          setData={setPeopleData}
          setUrl={setPeopleUrl}
          data={people}
        />
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
