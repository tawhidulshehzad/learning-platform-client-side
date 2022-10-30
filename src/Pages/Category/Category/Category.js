import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const classes = useLoaderData();
  return (
    <div>
      <h3>this is a category : {classes.length}</h3>
    </div>
  );
};

export default Category;
