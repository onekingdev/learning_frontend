import {COLLECTIBLE_FRAGMENT} from './fragments';

const queryFetch = (
  query: string,
  handleData: (x: any) => void,
  handleError: (x: any) => void
) => {
  return fetch('http://localhost:8000/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
    }),
  })
    .then(handleData)
    .catch(handleError);
};
