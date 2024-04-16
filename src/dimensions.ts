import * as dimensionJson from './data/dimensions.json';
import { DataLayout, Dimension } from './types';

export const dimensions = {
  meta: dimensionJson['updated'],
  data: dimensionJson['data'] as Dimension[]
} satisfies DataLayout<Dimension>;
