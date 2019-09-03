import { getRepository } from 'typeorm'
import { Terminology } from '../../../entities'

export const createTerminology = {
  async createTerminology(_: any, { terminology }, context: any) {
    return await getRepository(Terminology).save({
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user,
      ...terminology
    })
  }
}
