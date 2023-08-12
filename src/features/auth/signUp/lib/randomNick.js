import { adjectives, names, uniqueNamesGenerator } from 'unique-names-generator'

export const randomNick = () =>
  uniqueNamesGenerator({
    dictionaries: [adjectives, names],
  })
