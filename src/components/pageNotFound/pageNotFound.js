import React from "react";
import "./pageNotFound.scss";
import grumpyCat from "../../assets/grumpy-cat.svg";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <div className="background-image">
        <img src={grumpyCat} alt={"logo"} />
        <span>404 Page Not Found</span>
      </div>
    </div>
  );
};

export default PageNotFound;
