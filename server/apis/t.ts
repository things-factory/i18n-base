import { getRepository } from 'typeorm'
import { Terminology } from '../entities/terminology'

export type T_Arugments = {
  key: String
  locale: String
  options?: Object
}

export async function t({ key, locale, options }: T_Arugments) {
  let value = await getTerminology({
    key,
    locale
  })

  return value
}

async function getTerminology({ key, locale }) {
  const repo = getRepository(Terminology)
  var value
  try {
    let term = await repo.findOne({
      where: {
        name: key,
        locale
      }
    })
    value = term.display
  } catch (e) {
    value = key
  }

  return value
}
