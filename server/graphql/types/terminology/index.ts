import { Filter, Pagination, Sorting } from '@things-factory/shell'
import { NewTerminology } from './new-terminology'
import { Terminology } from './terminology'
import { TerminologyList } from './terminology-list'
import { TerminologyPatch } from './terminology-patch'

export const Mutation = `
  createTerminology (
    terminology: NewTerminology!
  ): Terminology

  updateTerminology (
    name: String!
    patch: TerminologyPatch!
  ): Terminology

  deleteTerminology (
    name: String!
  ): Terminology
`

export const Query = `
  terminologies(filters: [Filter], pagination: Pagination, sortings: [Sorting]): TerminologyList
  terminology(name: String!): Terminology
`

export const Types = [Filter, Pagination, Sorting, Terminology, NewTerminology, TerminologyPatch, TerminologyList]
