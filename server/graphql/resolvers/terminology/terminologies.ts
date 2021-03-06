import { buildQuery, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Terminology } from '../../../entities'

export const terminologiesResolver = {
  async terminologies(_: any, params: ListParam, context: any) {
    const queryBuilder = getRepository(Terminology).createQueryBuilder()
    buildQuery(queryBuilder, params, context)
    const [items, total] = await queryBuilder.leftJoinAndSelect('Terminology.domain', 'Domain').getManyAndCount()

    return { items, total }
  }
}
