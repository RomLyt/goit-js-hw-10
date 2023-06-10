import Notiflix from 'notiflix';

const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY =
  'live_rSmz8wcziJ9DKVQVcb1LwFltqDXUplNOjySfVOj6WyBXzMkdZTc7JOszgHDmDj2T';
const CAT_SEARCH = 'https://api.thecatapi.com/v1/images/search';

export function fetchBreeds() {
  const params = new URLSearchParams({
    apikey: API_KEY,
  });
  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new error(response.status);
      }
      return response.json();
    })
    .catch(() =>
      Notiflix.Notify.failure(
        'Oops! Something went wrong! Try reloading the page!'
      )
    );
}

export function fetchCatByBreed(breedId) {
  return fetch(`${CAT_SEARCH}?breed_ids=${breedId}&api_key=${API_KEY}`)
    .then(response => {
      if (!response.ok) {
        throw new error(response.status);
      }
      return response.json();
    })
    .catch(() => console.log());
}
