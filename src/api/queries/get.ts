export const get = (
  queryName: string,
  query: string,
  handleData: (x: unknown) => void,
  handleError: (x: unknown) => void
) => {
  return fetch(process.env.NODE_ENV==="development" ?'/graphql/' : 'https://api.withsocrates.com/graphql/', {
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
  return fetch(process.env.NODE_ENV==="development" ?'/graphql/' : 'https://api.withsocrates.com/graphql/', {
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
  return fetch(process.env.NODE_ENV==="development" ?'/graphql/' : 'https://api.withsocrates.com/graphql/', {
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

export const sendRawQuery = async (
  query: string,
  token?: string
) => {
  const res:any = await fetch(process.env.NODE_ENV==="development" ?'/graphql/' : 'https://api.withsocrates.com/graphql/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      query: `
        ${query}
      `,
    }),
  }).catch(e => {
    return {success: false, msg: e.message}
  })

  if(res.success === false)
  return {success: false, msg: res.error}

  const result = await res.json()
  if(result.errors) {
    return {success: false, msg: result.errors[0].message};
  }

  else return result
};
export default get_async;
