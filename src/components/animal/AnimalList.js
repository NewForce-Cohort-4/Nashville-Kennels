import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
import "./Animal.css";

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  // This is basically a magical import statement: import {getAnimals, useAnimals} from "./AnimalProvider.js"
  const { animals, getAnimals } = useContext(AnimalContext);

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals();
  }, []);

  // This will run every time we change the animals state!
  //   useEffect(() => {
  //       console.log(animals)
  //       debugger
  //   }, [animals])

  return (
    <div className="animals">
      {animals.map((singleAnimalInLoop) => {
        //return AnimalCard(singleAnimalInLoop)
        return <AnimalCard key={singleAnimalInLoop.id} animalProp={singleAnimalInLoop} />;
      })}
    </div>
  );
};
