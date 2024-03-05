import React from "react";
import Card from "../card/Card.jsx";

import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.webp";
import image5 from "../images/image5.jpeg";
import image6 from "../images/image6.jpeg";
import image7 from "../images/image7.jpeg";
import image8 from "../images/image8.jpeg";
import image9 from "../images/image9.webp";
import image10 from "../images/image10.webp";
import image11 from "../images/image11.webp";
import image12 from "../images/image12.jpeg";


const Main = () => {
  return (
    <table>
      <tbody>
       <tr>
        <td>
          <Card
          name="Best Pizza"
          address="33 Havemeyer St, Brooklyn, NY 11211"
          rating="4.5/5"
          image={image1}
          />
        </td>
        <td>
          <Card
          name="Roberta's"
          address="261 Moore St, Brooklyn, NY 11206"
          rating="4.6/5"
          image={image2}
          />
        </td>
        <td>
          <Card
          name="Juliana's"
          address="19 Old Fulton St, Brooklyn, NY 11201"
          rating="4.7/5"
          image={image3}
          />
        </td>
        <td>
          <Card
          name="Lucali"
          address="575 Henry St, Brooklyn, NY 11231"
          rating="4.8/5"
          image={image4}
          />
        </td>
        <td>
          <Card
            name="Di Fara Pizza"
            address="1424 Avenue J, Brooklyn, NY 11230"
            rating="4.6/5"
            image={image5}
          />
        </td>
        <td>
          <Card
            name="L & B Spumoni Gardens"
            address="2725 86th St, Brooklyn, NY 11223"
            rating="4.6/5"
            image={image6}
          />
        </td>
        <td>
          <Card
            name="Artichoke Basille's Pizza"
            address="59 5th Ave, Brooklyn, NY 11217"
            rating="4.2/5"
            image={image7}
          />
        </td>
        <td>
            <Card
            name="Ignazio's"
            address="4 Water St, Brooklyn, NY 11201"
            rating="4.0/5"
            image={image8}
           />
        </td>
        <td>
          <Card
          name="Totonno's"
          address="1524 Neptune Ave, Brooklyn, NY 11224"
          rating="4.2/5"
          image={image9}
          />
        </td>
        <td>
          <Card
          name="Paulie Gee's"
          address="60 Greenpoint Ave, Brooklyn, NY 11222"
          rating="4.3/5"
          image={image10}
          />
        </td>
        <td>
          <Card
          name="L'Industrie Pizzeria"
          address="254 S 2nd St, Brooklyn, NY 11211"
          rating="4.8/5"
          image={image11}
          />
        </td>
        <td>
          <Card
            name="Farina nyc"
            address="338 Hamilton Ave, Brooklyn, NY 11231"
            rating="4.8/5"
            image={image12}
          />
        </td>
       </tr>
      </tbody>
    </table>
  );
};

export default Main;