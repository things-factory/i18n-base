import { gql } from 'apollo-server-koa'

export const NewTerminology = gql`
  input NewTerminology {
    name: String!
    domain: Domain!
    description: String
    locale: String
    category: String
    display: String
  }
`
