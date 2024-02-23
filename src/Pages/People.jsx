import React from "react";
import { useParams } from "react-router-dom";

const People = () => {
  const { pageNum } = useParams();
  console.log(pageNum);
  return <div>People</div>;
};

export default People;
