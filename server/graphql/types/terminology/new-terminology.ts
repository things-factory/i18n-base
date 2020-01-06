import gql from 'graphql-tag'

export const NewTerminology = gql`
  input NewTerminology {
    name: String!
    description: String
    locale: String!
    category: String!
    display: String!
  }
`
