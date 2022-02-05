export const get = (
  queryName: string,
  query: string,
  handleData: (x: unknown) => void,
  handleError: (x: unknown) => void
) => {
  return fetch('https://api.withsocrates.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `{
        ${queryName} ${query}
      }`,
    }),
  })
    .then(response => response.json())
    .then(handleData)
    .catch(handleError);
};

export const mutation = (
  mutationName: string,
  queryName: string,
  query: string,
  handleData: (x: unknown) => void,
  handleError: (x: unknown) => void
) => {
  return fetch('https://api.withsocrates.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `mutation 
        {
          ${mutationName}{
            ${queryName}
            ${query}
          }
         
        }
      
      `
    }),
  })
    .then(response => response.json())
    .then(handleData)
    .catch(handleError);
};
