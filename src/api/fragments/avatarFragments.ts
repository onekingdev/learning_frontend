import {COIN_WALLET} from './coinWalletFragments'
export const AVATAR_PURCHASE_TRANSACTION = `
    id
    identifier
    randomSlug
    createTimestamp
    updateTimestamp
    account {
        ${COIN_WALLET}
    }
    date
    side
    comment
    amount
`

export const AVATAR = `
    id
    identifier
    isActive
    deletedTimestamp
    randomSlug
    createTimestamp
    updateTimestamp
    typeOf
    name
    image
    price
    avatarpurchasetransactionSet {
        ${AVATAR_PURCHASE_TRANSACTION}
    }
`
