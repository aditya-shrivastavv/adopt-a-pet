// pass the animal get it's breeds

import { useState, useEffect } from "react";

const localCache = {};

// CUSTOM HOOK -> other hooks packaged together
export default function useAnimalBreeds(animal) {
  const [animalBreeds, setAnimalBreeds] = useState([]);
  const [status, setStatus] = useState("unloaded");

  useEffect(() => {
    if (!animal) {
      setAnimalBreeds([]);
    } else if (localCache[animal]) {
      setAnimalBreeds(localCache[animal]);
    } else {
      requestAnimalBreeds();
    }

    async function requestAnimalBreeds() {
      setAnimalBreeds([]);
      setStatus("loading");

      const response = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = response.json();
      localCache[animal] = json.breeds || [];
      setAnimalBreeds(localCache[animal]);
      setStatus("loaded");
    }
  }, [animal]);

  return [animalBreeds, status];
}
