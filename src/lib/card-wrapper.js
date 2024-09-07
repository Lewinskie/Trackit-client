import React from "react";

const CardWrapper = (props) => {
  return <div className="card-bg rounded-lg shadow-lg p-4">{props.children}</div>;
};

export default CardWrapper;
