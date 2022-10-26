import React from "react";
import { useQuery } from "react-query";
import Singleuser from "./Singleuser";

const Alluser = () => {
  const { isLoading, error, data, refetch } = useQuery("repoData", () =>
    fetch("https://obscure-falls-66122.herokuapp.com/employee").then((res) =>
      res.json()
    )
  );

  if (isLoading) return "Loading hosse...";

  if (error) return "An error has occurred: " + error.message;
  return (
    <div className="container">
      <div className="row">
        <h2>Total Employee: {data.length}</h2>
        {data.map((val, index) => (
          <Singleuser usr={val} key={index}></Singleuser>
        ))}
      </div>
    </div>
  );
};

export default Alluser;
