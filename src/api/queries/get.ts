export const get = (
  queryName: string,
  query: string,
  handleData: (x: unknown) => void,
  handleError: (x: unknown) => void
) => {
  return fetch(<string>process.env.REACT_APP_SERVER_URL, {
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
  return fetch(<string>process.env.REACT_APP_SERVER_URL, {
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

export const get_async =  (
  queryName: string,
  query: string,
  token?: string
) => {
  return fetch(<string>process.env.REACT_APP_SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      query: `{
        ${queryName} ${query}
      }`,
    }),
  })
};
export default get_async;
