import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { AnimalCard } from "./AnimalCard";
import {CustomerContext } from "../customer/CustomerProvider"
import {LocationContext} from "../location/LocationProvider"
import {useHistory} from "react-router-dom"
import "./Animal.css";


export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  // This is basically a magical import statement: import {getAnimals, useAnimals} from "./AnimalProvider.js"
  const { animals, getAnimals } = useContext(AnimalContext);
  const {customers, getCustomers} = useContext(CustomerContext)
  const {locations, getLocations} = useContext(LocationContext)

  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals");
    getLocations().then(getCustomers).then(getAnimals)
  }, []);

  // This will run every time we change the animals state!
  //   useEffect(() => {
  //       console.log(animals)
  //       debugger
  //   }, [animals])

  return (
    <>
    <h2>Animals</h2>
		<button onClick={() => {history.push("/animals/create")}}>
            Add Animal
        </button>
    <div className="animals">
      {animals.map((singleAnimalInLoop) => {
        const owner = customers.find(singleCustomer => singleCustomer.id === singleAnimalInLoop.customerId)
        const location = locations.find(singleLocation => singleLocation.id === singleAnimalInLoop.locationId)
        //return AnimalCard(singleAnimalInLoop)
        console.log("this should be matching entries from other tables", owner, location)
        return <AnimalCard key={singleAnimalInLoop.id} kennelOfResidence={location} ownerProp={owner} animalProp={singleAnimalInLoop} />;
      })}
    </div>
    </>
  );
};
