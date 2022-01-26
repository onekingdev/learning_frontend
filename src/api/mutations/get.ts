const get = (
    mutation: string,
    handleData: (x: unknown) => void,
    handleError: (x: unknown) => void
  ) => {
    return fetch('http://143.244.183.24/graphql/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `mutation {
          ${mutation}
        }`,
      }),
    })
      .then(response => response.json())
      .then(handleData)
      .catch(handleError);
  };
export default get;
