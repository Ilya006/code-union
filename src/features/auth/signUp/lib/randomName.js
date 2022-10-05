import { adjectives, names, uniqueNamesGenerator } from 'unique-names-generator'

export const randomName = () =>
  uniqueNamesGenerator({
    dictionaries: [adjectives, names],
  })
