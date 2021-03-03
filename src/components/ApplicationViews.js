import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./Home";
import { AnimalCard } from "./animal/AnimalCard";
import { AnimalProvider } from "./animal/AnimalProvider";
import { CustomerProvider } from "./customer/CustomerProvider";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalList } from "./animal/AnimalList";
import { AnimalForm } from "./animal/AnimalForm";
import { AnimalDetail } from "./animal/AnimalDetail";

export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <AnimalProvider>
        <Route exact path="/animals/detail/:animalId(\d+)">
          <AnimalDetail />
        </Route>
        <Route exact path="/animals">
          <AnimalList />
        </Route>
        <CustomerProvider>
          <LocationProvider>
            <Route exact path="/animals/create">
              <AnimalForm />
            </Route>
          </LocationProvider>
        </CustomerProvider>
      </AnimalProvider>
    </>
  );
};
