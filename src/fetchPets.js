export default async function fetchPets({ queryKey }) {
  const id = queryKey[1];

  const apiResponse = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiResponse.ok) {
    throw new Error(`|-> There was problem in fetching details/${id} <-|`);
  }

  return apiResponse.json();
}

/*

1. always throw error if the fetch request failed, it's necessary for react-query.
2. react-query expects you to return a promise so do that.
3. "return await apiResponse.json()" will work too but that's not neccesary.

*/
