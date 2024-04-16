import * as colorJson from './data/colors.json';
import { Color, DataLayout } from './types';

export const colors = {
  meta: colorJson['updated'],
  data: colorJson['data'] as Color[]
} satisfies DataLayout<Color>;
