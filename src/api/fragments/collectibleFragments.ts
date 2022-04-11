export const COLLECTIBLE_CATEGORY = `
  id
  name
  price
  owned
  firebaseName
`
export const COLLECTIBLE_OWNED_CARD = `
  id
  image
  tire
`

export const CARD = `
  id
  name
  image
  category {
    id
    name
    firebaseName
  }
`
