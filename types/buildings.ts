/* eslint-disable camelcase */
export interface BuildingList {
  dire: {
    [buildingName: string]: Building;
  };
  radiant: {
    [buildingName: string]: Building;
  };
}

export interface Building {
  health: number;
  max_health: number;
}

/*
"dota_goodguys_tower1_top": {
  "health": 1149,
  "max_health": 1800
}
*/
