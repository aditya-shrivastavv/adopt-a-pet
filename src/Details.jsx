import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState, useContext } from "react";

import fetchPets from "./fetchPets";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundaries";
import Modal from "./Modal";
import AdoptedPetContext from "./AdoptedPetContext";

function Details() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [_, setAdoptedPet] = useContext(AdoptedPetContext); // eslint-disable-line no-unused-vars
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
          <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Are you sure you want to Adopt {pet.name} ?</h1>
                <div className="buttons">
                  <button
                    onClick={() => {
                      setAdoptedPet(pet);
                      navigate("/");
                    }}
                  >
                    Yes
                  </button>
                  <button onClick={() => setShowModal(false)}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
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
