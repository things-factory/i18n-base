import { buildQuery, ListParans } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Terminology } from '../../../entities'

export const terminologiesResolver = {
  async terminologies(_: any, params: ListParans) {
    const queryBuilder = getRepository(Terminology).createQueryBuilder()
    buildQuery(queryBuilder, params)
    const [items, total] = await queryBuilder
      .leftJoinAndSelect('Terminology.domain', 'Domain')
      .leftJoinAndSelect('Terminology.creator', 'Creator')
      .leftJoinAndSelect('Terminology.updater', 'Updater')
      .getManyAndCount()

    return { items, total }
  }
}
