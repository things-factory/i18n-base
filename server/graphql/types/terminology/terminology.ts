import gql from 'graphql-tag'

export const Terminology = gql`
  type Terminology {
    id: String
    domain: Domain
    name: String
    description: String
    locale: String
    category: String
    display: String
    createdAt: String
    updatedAt: String
  }
`
