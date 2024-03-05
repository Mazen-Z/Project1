import React from "react";
import PizzaCard from './pizzaCard';
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

const pizzaPlace = () => {
    const place1 = {
        name: 'Best Pizza (4.5 ⭐)',
        location: '33 Havemeyer St, Brooklyn, NY 11211',
        //rating: '4.7/5 ⭐',
        image: image1,
        url: 'http://www.bestpizzawilliamsburg.com/'
        };
    const place2 = {
        name: 'Robertas (4.5 ⭐)',
        location: '261 Moore St, Brooklyn, NY 11206',
        image: image2,
        url: 'https://www.robertaspizza.com/'
        };
    const place3 = {
        name: 'Julianas (4.6 🌟)',
        location: '19 Old Fulton St, Brooklyn, NY 11201',
        image: image3,
        url: 'https://julianaspizza.com/'
        };
    const place4 = {
        name: 'Lucali (4.3 ⭐)',
        location: '575 Henry St, Brooklyn, NY 11231',
        image: image4,
        url: 'https://www.lucali.com/'
        };
    const place5 = {
        name: 'Di Fara Pizza (4.2 ⭐)',
        location: '1424 Avenue J, Brooklyn, NY 11230',
        image: image5,
        url: 'https://difaras.com/'
        };
    const place6 = {
        name: 'L & B Spumoni Gardens (4.6 🌟)',
        location: '2725 86th St, Brooklyn, NY 11223',
        image: image6,
        url: 'https://spumonigardens.com/'
        };
    const place7 = {
        name: 'Artichoke Basilles Pizza (4.2 ⭐)',
        location: '59 5th Ave, Brooklyn, NY 11217',
        image: image7,
        url: 'https://www.artichokepizza.com/location/artichoke-basille-pizza-park-slope/'
        };
    const place8 = {
        name: 'Ignazios (4.0 ⭐)',
        location: '4 Water St, Brooklyn, NY 11201',
        image: image8,
        url: 'https://www.ignaziospizzamenu.com/'
        };
    const place9 = {
        name: 'Totonnos (4.2 ⭐)',
        location: '1524 Neptune Ave, Brooklyn, NY 11224',
        image: image9,
        url: 'https://www.totonnosconeyisland.com/'
        };
    const place10 = {
        name: 'Paulie Gees (4.6 🌟)',
        location: '60 Greenpoint Ave, Brooklyn, NY 11222',
        image: image10,
        url: 'https://pauliegee.com/restaurant/paulie-gees-slice-shop/'
        };
    const place11 = {
        name: 'L Industrie Pizzeria (4.8 🌟)',
        location: '254 S 2nd St, Brooklyn, NY 11211',
        image: image11,
        url: 'https://www.lindustriebk.com/'
        };
    const place12 = {
        name: 'Farina NYC (4.8 🌟)',
        location: '338 Hamilton Ave, Brooklyn, NY 11231',
        image: image12,
        url: 'https://www.farinanyc.com/'
        };
  return (
    <div className="Places">
      <PizzaCard name={place1.name} location={place1.location} rating={place1.rating} image={place1.image} url={place1.url} />
      <PizzaCard name={place2.name} location={place2.location} image={place2.image} url={place2.url} />
      <PizzaCard name={place3.name} location={place3.location} image={place3.image} url={place3.url} />
      <PizzaCard name={place4.name} location={place4.location} image={place4.image} url={place4.url} />
      <PizzaCard name={place5.name} location={place5.location} image={place5.image} url={place5.url} />
      <PizzaCard name={place6.name} location={place6.location} image={place6.image} url={place6.url} />
      <PizzaCard name={place7.name} location={place7.location} image={place7.image} url={place7.url} />
      <PizzaCard name={place8.name} location={place8.location} image={place8.image} url={place8.url} />
      <PizzaCard name={place9.name} location={place9.location} image={place9.image} url={place9.url} />
      <PizzaCard name={place10.name} location={place10.location} image={place10.image} url={place10.url} />
      <PizzaCard name={place11.name} location={place11.location} image={place11.image} url={place11.url} />
      <PizzaCard name={place12.name} location={place12.location} image={place12.image} url={place12.url} />
    </div>
  );
}

export default pizzaPlace;