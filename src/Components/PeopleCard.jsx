import React from "react";

const PeopleCard = ({ person }) => {
  return (
    <div className="dark:text-neutral-400 hover:bg-white hover:dark:bg-neutral-800 transit ease-in-out duration-500 p-5 min-h-80 w-80  hover:shadow-2xl rounded-md border border-neutral-600">
      <h1 className=" font-bold truncate dark:text-neutral-200 text-neutral-900 text-3xl pb-5 border-b border-neutral-500">
        {person.name}
      </h1>
      <p className="pt-2">Birth Year: {person.birth_year}</p>
      <p className="pt-2">Gender: {person.gender}</p>
      <p className="pt-2">Eye Color: {person.eye_color}</p>

      <div className="flex pt-2 w-full no-scrollbar overflow-x-scroll">
        Hair Color:
        {person.hair_color.split(",").map((item, index) => (
          <div
            className={`${index !== 0 ? "border-l  border-neutral-500 " : ""} px-2 capitalize whitespace-nowrap`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="flex pt-2 w-full no-scrollbar overflow-x-scroll">
        Skin Color:
        {person.skin_color.split(",").map((item, index) => (
          <div
            className={`${index !== 0 ? "border-l  border-neutral-500 " : ""} px-2 capitalize whitespace-nowrap`}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex text-lg gap-10 pt-2">
        <p>Height: {person.height}</p>
        <p>Mass: {person.mass}</p>
      </div>
    </div>
  );
};

export default PeopleCard;
