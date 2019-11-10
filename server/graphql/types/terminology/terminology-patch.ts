import gql from 'graphql-tag'

export const TerminologyPatch = gql`
  input TerminologyPatch {
    name: String
    description: String
    locale: String
    category: String
    display: String
  }
`
