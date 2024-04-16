import * as versionJson from './data/versions.json';
import { DataLayout, Version } from './types';

export const versions = {
  meta: versionJson['updated'],
  data: versionJson['data'] as Version[]
} satisfies DataLayout<Version>;
