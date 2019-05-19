import { gql } from 'apollo-server-koa'

export const TerminologyPatch = gql`
  input TerminologyPatch {
    name: String!
    domain: Domain!
    description: String
    locale: String
    category: String
    display: String
  }
`
