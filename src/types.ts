export type Version = {
  version: string;
  major: string;
} & (
  | {
      planned: string;
      majorName: null;
      release: null;
    }
  | {
      majorName: string;
      release: string;
    }
);

export interface Game {
  tag: string;
  name: string;
  description: string;
  officialRelease: string;
  editions: string[];
  status: 'active' | 'upcoming' | 'discontinued';
}

export interface Effect {
  tag: string;
  name: string;
  minecraftId: number;
  description: {
    short: string;
    long: string;
  };
  type: string;
  causes: {
    tag: string | null;
    description: null | string;
    potency: string | null;
    length: string | null;
    note: string | null;
  }[];
}

export interface Dimension {
  tag: DimensionTag;
  name: string;
  coordinateScale: number;
  ambientLight: number;
  fixedTime: null;
  ultrawarm: boolean;
  altitude: {
    totalHight: number;
    logicalHight: number;
    minY: number;
    maxY: number;
  };
  has: {
    ceiling: boolean;
    raids: boolean;
    skylight: boolean;
    workingRespawnAnchor: boolean;
    workingBed: boolean;
    safePiglins: boolean;
  };
  biomes: BiomeTag[];
}

export interface Color {
  name: string;
  tag: string;
  chatCode: string;
  motdCode: string;
  hexCode: string;
}

export interface Alphabet {
  letter: string;
  galactic: string;
}

export interface Armor {
  tag: string;
  name: string;
  material: string;
  durability: number;
  defensePoints: number;
  toughness: number;
}

export interface Biome {
  tag: DimensionTag;
  name: string;
  category: CategoryTag;
  rain: number;
  precipitation: Precipitation;
  temperature: number;
  rarity: Rarity;
  dimension: Dimension;
  structures: StructureTag[];
}

export type BiomeTag =
  | 'badlands'
  | 'bamboo_jungle'
  | 'beach'
  | 'birch_forest'
  | 'cold_ocean'
  | 'dark_forest'
  | 'deep_cold_ocean'
  | 'deep_frozen_ocean'
  | 'dark_forest'
  | 'deep_cold_ocean'
  | 'deep_frozen_ocean'
  | 'deep_lukewarm_ocean'
  | 'deep_ocean'
  | 'desert'
  | 'dripstone_caves'
  | 'eroded_badlands'
  | 'flower_forest'
  | 'frozen_ocean'
  | 'frozen_peaks'
  | 'frozen_river'
  | 'grove'
  | 'ice_spikes'
  | 'jagged_peaks'
  | 'jungle'
  | 'lukewarm_ocean'
  | 'lush_caves'
  | 'meadow'
  | 'mushroom_fields'
  | 'ocean'
  | 'old_growth_birch_forest'
  | 'old_growth_pine_taiga'
  | 'old_growth_spruce_taiga'
  | 'plains'
  | 'river'
  | 'savanna'
  | 'savanna_plateau'
  | 'snowy_beach'
  | 'snowy_plains'
  | 'snowy_slopes'
  | 'snowy_taiga'
  | 'sparse_jungle'
  | 'stony_peaks'
  | 'stony_shore'
  | 'sunflower_plains'
  | 'swamp'
  | 'taiga'
  | 'warm_ocean'
  | 'windswept_forest'
  | 'windswept_gravelly_hills'
  | 'windswept_hills'
  | 'windswept_savanna'
  | 'wooded_badlands'
  | 'nether_wastes'
  | 'crimson_forest'
  | 'warped_forest'
  | 'soul_sand_valley'
  | 'basalt_deltas'
  | 'the_end'
  | 'small_end_islands'
  | 'end_highlands'
  | 'end_midlands'
  | 'end_barrens';

export type Precipitation = 'none' | 'rain' | 'snow';

export type CategoryTag =
  | 'none'
  | 'plains'
  | 'swamp'
  | 'ice'
  | 'forest'
  | 'taiga'
  | 'savanna'
  | 'extreme_hills'
  | 'jungle'
  | 'mesa'
  | 'mountain'
  | 'river'
  | 'beach'
  | 'ocean'
  | 'mushroom'
  | 'underground'
  | 'nether'
  | 'the_end';

export type Rarity = 'common' | 'uncommon' | 'none' | 'rare';

export type DimensionTag = 'overworld' | 'the_end' | 'nether';

export type StructureTag =
  | 'stone_platform'
  | 'village'
  | 'pillager_outpost'
  | 'igloo'
  | 'ice_spike'
  | 'desert_temple'
  | 'desert_well'
  | 'fossil'
  | 'swamp_hut'
  | 'woodland_mansion'
  | 'jungle_temple'
  | 'mineshaft'
  | 'ocean_monument'
  | 'shipwreck'
  | 'underwater_ruins'
  | 'iceberg'
  | 'ancient_city'
  | 'bastion_remnants'
  | 'nether_fortress'
  | 'ruined_portal'
  | 'basalt_pillar'
  | 'end_city'
  | 'end_gateway';

export interface DataLayout<D = unknown> {
  meta: {
    date: string;
    majorVersion: string;
  };
  data: D[];
}
