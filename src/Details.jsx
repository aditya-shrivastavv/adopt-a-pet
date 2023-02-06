import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import fetchPets from "./fetchPets";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundaries";

function Details() {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPets);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">😵‍💫</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  ); // because ErrorBoundary doesn't care.
}

/*
1. details is just arbitrary caching key, it can be anything
2. if i request the exact same key again, i am gonna get the exact same reponse
  the api will not be called again
3. if you don't have it in your cache then run fetchPets.
  for example - if "details id:5" not found then fetchPets will get called
4. ["details", id] will be passed as the "queryKey" to fetchPet
5. isLoading is for the first load. isFetching is for refetching.

basically react-query is just removing the concept of localCache from useAnimalBreeds
*/
