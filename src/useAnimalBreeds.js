// pass the animal get it's breeds

import { useQuery } from "@tanstack/react-query";
import fetchAnimalBreeds from "./fetchAnimalBreeds";

// CUSTOM HOOK -> other hooks packaged together
export default function useAnimalBreeds(animal) {
  const results = useQuery(["breeds", animal], fetchAnimalBreeds);

  return [results?.data?.breeds ?? [], results.status];
}

/*
1. if results available, it's data available, and it's breeds available gimme that otherwise give me an empty array.
*/
