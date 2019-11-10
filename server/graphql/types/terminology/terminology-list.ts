import gql from 'graphql-tag'

export const TerminologyList = gql`
  type TerminologyList {
    items: [Terminology]
    total: Int
  }
`
