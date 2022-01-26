export const get = (
  queryName: string,
  query: string,
  handleData: (x: unknown) => void,
  handleError: (x: unknown) => void
) => {
  return fetch('http://143.244.183.24/graphql/', {
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
