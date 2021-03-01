import React from "react";
import "./Animal.css";

export const AnimalCard = ({animalProp})=> {

  return (
    <section className="animal">
      <h3 className="animal__name">{animalProp.name}</h3>
      <address className="location__address">{animalProp.location.name}</address>
    </section>
  );
};
