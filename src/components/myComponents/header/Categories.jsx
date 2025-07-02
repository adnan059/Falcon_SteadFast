import React from "react";
import Loader from "../loader/Loader";

const Categories = ({ categories, loading }) => {
  return (
    <div className="hidden xl:flex gap-3">
      {loading ? (
        <Loader />
      ) : (
        categories.slice(0, 5).map((cat) => (
          <p
            className={`text-[var(--main-theme)]`}
            style={{ fontSize: "var(--fs-c)" }}
            key={cat?.name}
          >
            {cat?.name}
          </p>
        ))
      )}
    </div>
  );
};

export default Categories;
