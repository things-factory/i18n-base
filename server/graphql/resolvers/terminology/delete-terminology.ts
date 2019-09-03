import { getRepository } from 'typeorm'
import { Terminology } from '../../../entities'

export const deleteTerminology = {
  async deleteTerminology(_: any, { name }, context: any) {
    return await getRepository(Terminology).delete({ domain: context.state.domain, name })
  }
}
