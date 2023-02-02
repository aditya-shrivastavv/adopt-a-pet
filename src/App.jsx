import { createRoot } from "react-dom";
import Pet from "./Pet";

function App() {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" breed="Havanese" animal="Dog" />
      <Pet name="Pepper" breed="Cockatiel" animal="Bird" />
      <Pet name="Doink" breed="Mixed" animal="Cat" />
    </div>
  );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
