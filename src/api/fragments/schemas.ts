export const _AVATAR = `
    id
    isActive
    typeOf
    name
    image
    price
`

export const _BATTERY = `
    id
    createTimestamp
    updateTimestamp
    level
`

export const COIN_WALLET = `
    id
    identifier
    randomSlug
    createTimestamp
    updateTimestamp
    name
    positiveSide
    balance
`

export const _STUDENT = `
  id
  identifier
  isActive
  firstName
  lastName
  fullName
  dob
  gender
  points
  intPeriodStartAt
  isNew
`;

export const HONOR_ROLL = `
    coinWallets {
        student {
            user {
                id
                username
                student {
                    currentAvatarHead {
                        id
                        image
                    }
                    currentAvatarAccessories {
                        id
                        image
                    }
                    currentAvatarClothes {
                        id
                        image
                    }
                }
            }
        }
        blockTransactionCoins
    }
`

export const LEVEL = `
    id
    isActive
    pointsRequired
    name
    amount
`;

export const token = `
    payload
    refreshExpiresIn
    token
    refreshToken
`

export const _SCHOOL_SCHEMA = `
id
isActive
name
typeOf
zip
country
district
`

export const SUBSCRIBER = `
    id
    isActive
    firstName
    lastName
    gender
    hasOrder
    zip
    country
    couponCode {
        id
        code
        percentage
        trialDay
        expiredAt
        stripeCouponId
    }
`
