import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
