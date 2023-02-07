export default async function fetchAnimalBreeds({ queryKey }) {
  const animal = queryKey[1];

  if (!animal) return [];

  const apiResponse = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!apiResponse.ok) {
    throw new Error(`|-> There was problem in fetching animal/${animal} <-|`);
  }

  return apiResponse.json();
}
