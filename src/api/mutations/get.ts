
export const get =  (
  mutation: string,
  token?: string,
) => {
  if(token)
  return fetch(process.env.NODE_ENV==="development" ? '/graphql/' : 'https://api.withsocrates.com/graphql/', {
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
  return fetch(process.env.NODE_ENV==="development" ? '/graphql/' : 'https://api.withsocrates.com/graphql/', {
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
