import React from "react";
import "./Animal.css";

export const AnimalCard = ({animalProp, ownerProp, kennelOfResidence})=> {

  return (
    <section className="animal">
      <h3 className="animal__name">{animalProp.name}</h3>
      <p>{ownerProp.name}</p>
      <p>{kennelOfResidence.name}</p>
      {/* <address className="location__address">{animalProp.location.name}</address> */}
    </section>
  );
};
