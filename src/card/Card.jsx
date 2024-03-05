import React from "react";
import button from "../button/button";
import Buttonn from "../button/button";

const Card = (props) => {
  const containerStyles = {
    borderRadius: "8px",
    border: "5px solid black",
    margin: "5px",
    padding: "2px",
    backgroundColor: "skyblue",
    height: "50vh",
    width: "50vh",
  };

  const nameStyles = {
    marginTop: "5px",
    alignSelf: "center",
    height: "5vh",
  };

  const descriptionStyles = {
    marginLeft: "2px",
    marginRight: "2px",
    alignSelf: "center",
    height: "10vh",
  };

  const pictureStyles = {
    width: "50vh",
    height: "20vh",
    borderRadius: "5px",
  };

  return (
    <div style={containerStyles}>
      <img src={props.image} style={pictureStyles} id="picture" />
      <h2 style={nameStyles} id="name">
        {props.name}
      </h2>
      <p style={descriptionStyles} id="description">
        {props.description}
      </p>
      <Buttonn site={props.link} />
    </div>
  );
};

export default Card;