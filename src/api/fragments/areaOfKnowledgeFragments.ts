import {AUDIENCES}from './peopleFragments'
export const UNIVERSAL_AREA_KNOWLEDGE = `
    id
    identifier
    createTimestamp
    updateTimestamp
    name
    slug
`

export const AREA_OF_KNOWLEDGE = `
    id
    identifier
    createTimestamp
    updateTimestamp
    hexColor
    slug
    image
    islandImage
    audience {
        ${AUDIENCES}
    }
    universalAreaKnowledge {
        ${UNIVERSAL_AREA_KNOWLEDGE}
    }
    name
`
