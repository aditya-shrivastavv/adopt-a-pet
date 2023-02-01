const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"));
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(React.createElement(App));