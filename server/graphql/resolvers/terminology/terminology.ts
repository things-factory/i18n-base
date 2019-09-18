import { getRepository } from 'typeorm'
import { Terminology } from '../../../entities'

export const terminologyResolver = {
  async terminology(_: any, { name }, context: any) {
    return await getRepository(Terminology).findOne({
      where: { domain: context.state.domain, name },
      relations: ['domain']
    })
  }
}
