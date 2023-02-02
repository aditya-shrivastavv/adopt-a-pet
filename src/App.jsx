import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

function App() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      breed: "Havanese",
      animal: "Dog",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      breed: "Cockatiel",
      animal: "Bird",
    }),
    React.createElement(Pet, {
      name: "Doink",
      breed: "Mixed",
      animal: "Cat",
    }),
  ]);
}

const root = createRoot(document.querySelector("#root"));
root.render(React.createElement(App));
