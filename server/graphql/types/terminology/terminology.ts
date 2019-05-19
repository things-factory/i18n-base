import { gql } from 'apollo-server-koa'

export const Terminology = gql`
  type Terminology {
    id: String
    domain: Domain
    name: String
    description: String
    locale: String
    category: String
    display: String
  }
`
