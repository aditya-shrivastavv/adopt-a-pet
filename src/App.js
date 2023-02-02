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

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(App));
