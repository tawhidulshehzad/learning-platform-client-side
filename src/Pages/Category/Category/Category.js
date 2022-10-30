import React from "react";
import { useLoaderData } from "react-router-dom";
import ClassesSummaryCard from "../../Shared/ClassesSummaryCard/ClassesSummaryCard";

const Category = () => {
  const categoryClasses = useLoaderData();
  return (
    <div>
      <h3>Courses: {categoryClasses.length}</h3>
      {categoryClasses.map((classes) => (
        <ClassesSummaryCard
          key={classes._id}
          classes={classes}
        ></ClassesSummaryCard>
      ))}
    </div>
  );
};

export default Category;
