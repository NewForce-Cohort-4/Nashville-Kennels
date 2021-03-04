import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom"

export function AnimalCard({animalProp}) {
  return (
    <section className="animal">

      <Link to={`/animals/detail/${animalProp.id}`}>{animalProp.name}</Link>
    </section>
  );
}
