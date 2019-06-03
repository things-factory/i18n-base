import { gql } from 'apollo-server-koa'

export const TerminologyList = gql`
  type TerminologyList {
    items: [Terminology]
    total: Int
  }
`
