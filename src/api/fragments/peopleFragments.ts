export const ORGANIZATIONS = `
    {
        id
        identifier
        isActive
        randomSlug
        name
        typeOf
        slug
        lft
        rght
        treeId
        level
    }
`;

export const ORGANIZATIONS_PERSONNEL = `
    {
        id
        identifier
        isActive
        randomSlug
        name
        lastName
        dateOfBirth
        identificationNumber
        position
    }
`;

export const GROUPS = `
    {
        id
        identifier
        isActive
        randomSlug
        name
        internalCode
        population
        slug
    }
`;

export const SCHOOLS = `
    {
        id
        identifier
        isActive
        randomSlug
        name
        slug
        internalCode
        typeOf 
    }
`;

export const SCHOOLS_PERSONNEL = `
    {
        id
        identifier
        isActive
        randomSlug
        name
        lastName
        dateOfBirth
        identificationNumber
        position
    }
`;

export const GRADES = `
    {
        id
        identifier
        isActive
        randomSlug
        slug
        name
    }
`;

export const PREREQUISITES = `
    {
        id
        identifier
        isActive
        randomSlug
        information
        advancePercentage
        advanceMinum
    }
`;

export const GUARDIANS = `
    {
        id
        identifier
        isActive
        randomSlug
        name
        lastName
    }
`;

export const GUARDIANS_STUDENT = `
    {
        id
        identifier
        randomSlug
    }
`;

export const AUDIENCES = `
    {
        id
        identifier
        isActive
        randomSlug
        slug
        name
    }
`;

export const WHOAMI = `
    {
        id
        password
        lastLogin
        isSuperuser
        username
        firstName
    }
`;
