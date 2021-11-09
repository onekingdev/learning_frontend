import {COLLECTIBLE_FRAGMENT} from './fragments';

const queryFetch = (query: string) => {
  return fetch('http://localhost:8000/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then(res => res.json())
    .catch(error => console.error(error));
};

export const COLLECTIBLE_FETCH = () => {
  queryFetch(COLLECTIBLE_FRAGMENT).then(res => console.log(res));
};
