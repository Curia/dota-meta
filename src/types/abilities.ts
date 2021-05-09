/* eslint-disable camelcase */
export interface AbilitiesList {
  team2: {
    [playerSlot: string]: Array<Ability>;
  };
  team3: {
    [playerSlot: string]: Array<Ability>;
  };
}

export interface Ability {
  name: string;
  level: number;
  can_cast: boolean;
  passive: boolean;
  ability_active: boolean;
  cooldown: number;
  ultimate: boolean;
}

/*
"ability0": {
  "name": "sven_storm_bolt",
  "level": 4,
  "can_cast": false,
  "passive": false,
  "ability_active": true,
  "cooldown": 7,
  "ultimate": false
}
*/
