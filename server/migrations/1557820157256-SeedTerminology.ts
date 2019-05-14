import { Domain } from '@things-factory/shell'
import { Terminology } from '../entities'
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm'

const SEED_TERMINOLOGIES = [
  {
    name: 'sample_term',
    locale: 'ko-KR',
    category: 'label',
    display: '샘플 용어'
  },
  {
    name: 'sample_term',
    locale: 'en-US',
    category: 'label',
    display: 'Sample Terminology'
  }
]

export class SeedTerminology1557820157256 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Terminology)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({ name: 'SYSTEM' })

    try {
      SEED_TERMINOLOGIES.forEach(async terminology => {
        await repository.save({
          domain,
          ...terminology
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(Terminology)

    SEED_TERMINOLOGIES.reverse().forEach(async terminology => {
      let record = await repository.findOne({ name: terminology.name })
      await repository.remove(record)
    })
  }
}
