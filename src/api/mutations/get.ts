
export const get =  (
  mutation: string,
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
};
export default get;
