import React from "react";


const PizzaCard = ({ name, location, image, url, rating }) => {
    return (
      <div className="Card">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <h4>{location}</h4>
        <h4>{rating}</h4>
        <a href={url} target="blank" rel="Read more"><button><b>Click Me!</b></button></a>
      </div>
  );
}

export default PizzaCard;