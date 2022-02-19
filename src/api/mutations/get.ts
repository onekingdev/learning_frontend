
export const get =  (
  mutation: string,
  token?: string,
) => {
  if(token)
  return fetch('graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      query: `mutation {
        ${mutation}
      }`,
    }),
  })
  else
  return fetch('graphql/', {
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
