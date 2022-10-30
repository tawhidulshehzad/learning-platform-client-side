import React from "react";
import { useLoaderData } from "react-router-dom";
import ClassesSummaryCard from "../../Shared/ClassesSummaryCard/ClassesSummaryCard";

const Courses = () => {
  const allClasses = useLoaderData();
  return (
    <div>
      <h2> Welcome to Courses</h2>
      {allClasses.map((classes) => (
        <ClassesSummaryCard
          key={classes._id}
          classes={classes}
        ></ClassesSummaryCard>
      ))}
    </div>
  );
};

export default Courses;
