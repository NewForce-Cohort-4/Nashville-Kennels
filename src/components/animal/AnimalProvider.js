import React, { useState, createContext } from "react";
import { AnimalList } from "./AnimalList";

// The context is imported and used by individual components that need data
export const AnimalContext = createContext();

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([]);


  const getAnimals = () => {
    return fetch("http://localhost:8088/animals")
      .then((res) => res.json())
      .then((parsedAnimals) => {
        //   animals = parsedAnimals
          setAnimals(parsedAnimals);

      });
  };
  const getAnimalById = (id) => {
    return fetch(
      `http://localhost:8088/animals/${id}?_expand=location&_expand=customer`
    ).then((res) => res.json());
  };

  const addAnimal = (animalObj) => {
    return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(animalObj),
    }).then((response) => response.json());
  };

  /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
  return (
    <AnimalContext.Provider
      value={{
        animals,
        getAnimals,
        addAnimal,
        getAnimalById
      }}
    >
      {props.children}
    </AnimalContext.Provider>
  );
};
