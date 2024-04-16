import * as alphabetJson from './data/alphabet.json';
import { Alphabet, DataLayout } from './types';

export const alphabet = {
  meta: alphabetJson['updated'],
  data: alphabetJson['data'] as Alphabet[]
} satisfies DataLayout<Alphabet>;
