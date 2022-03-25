import React from "react";

export default function Loader() {
  return (
    <div className={"center-align"}>
      <h4>Loading...</h4>
      <div className="progress">
        <div className="indeterminate"></div>
      </div>
    </div>
  );
}
