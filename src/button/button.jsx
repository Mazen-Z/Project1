import React from "react";
import "./button.css";

const Buttonn = ({ onClick, children }) => {
  return <button onClick={onClick} className="button">{children}</button>;
};

export default Buttonn;