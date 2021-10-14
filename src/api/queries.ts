//import {COLLECTIBLE_FRAGMENT} from './fragments';

import {COLLECTIBLE_FRAGMENT} from './fragments';

export const COLLECTIBLE_CALL = () => {
  fetch('http://localhost:8000/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
              query {
                  collectibles{
                    ${COLLECTIBLE_FRAGMENT}
                  }
              }
            `,
      vaiables: {},
    }),
  })
    .then(res => res.json())
    .then(result => console.log(result));
};
