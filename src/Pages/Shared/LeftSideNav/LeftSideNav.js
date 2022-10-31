import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AutoLogin from "../../../AutoLogin/AutoLogin";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://learning-hub-server-fawn.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h3>All Subjects</h3>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link
              className="text-decoration-none"
              to={`/category/${category.id}`}
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
      <div>
        <AutoLogin></AutoLogin>
      </div>
    </div>
  );
};

export default LeftSideNav;
