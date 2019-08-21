import { getRepository } from 'typeorm'
import { Terminology } from '../../../entities'

export const updateTerminology = {
  async updateTerminology(_: any, { name, patch }, context: any) {
    const repository = getRepository(Terminology)
    const terminology = await repository.findOne({
      where: { domain: context.domain, name }
    })

    return await repository.save({
      ...terminology,
      ...patch,
      updater: context.state.user
    })
  }
}
