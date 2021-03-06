import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
import { useHistory } from "react-router-dom";
import "./Animal.css";
// import {getAnimals, useAnimals} from "./AnimalProvider"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  // This is basically a magical import statement: import {getAnimals, useAnimals} from "./AnimalProvider.js"
  const { animals, getAnimals } = useContext(AnimalContext);


  const history = useHistory();

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getAnimals()
  }, []);


  return (
    <>
      <h2>Animals</h2>
      <button
        onClick={() => {
          history.push("/animals/create");
        }}
      >
        Add Animal
      </button>
      <div className="animals">
        {animals.map((singleAnimalInLoop) => {
          return (
            <AnimalCard
              key={singleAnimalInLoop.id}
              animalProp={singleAnimalInLoop}
              darkMode={true}
            />
          );
        })}
      </div>
    </>
  );
};
