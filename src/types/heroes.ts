/* eslint-disable camelcase */
export interface HeroList {
  team2: {
    [playerSlot: string]: Hero;
  };
  team3: {
    [playerSlot: string]: Hero;
  };
}

export interface Hero {
  xpos: number;
  ypos: number;
  id: number;
  name: string;
  level: number;
  alive: boolean;
  respawn_seconds: number;
  buyback_cost: number;
  buyback_cooldown: number;
  health: number;
  max_health: number;
  health_percent: number;
  mana: number;
  max_mana: number;
  mana_percent: number;
  silenced: boolean;
  stunned: boolean;
  disarmed: boolean;
  magicimmune: boolean;
  hexed: boolean;
  muted: boolean;
  break: boolean;
  smoked: boolean;
  has_debuff: boolean;
  selected_unit: boolean;
  talent_1: boolean;
  talent_2: boolean;
  talent_3: boolean;
  talent_4: boolean;
  talent_5: boolean;
  talent_6: boolean;
  talent_7: boolean;
  talent_8: boolean;
}

/*
"player0": {
  "xpos": 5645,
  "ypos": -5267,
  "id": 18,
  "name": "npc_dota_hero_sven",
  "level": 12,
  "alive": true,
  "respawn_seconds": 0,
  "buyback_cost": 815,
  "buyback_cooldown": 0,
  "health": 2020,
  "max_health": 2020,
  "health_percent": 100,
  "mana": 383,
  "max_mana": 495,
  "mana_percent": 77,
  "silenced": true,
  "stunned": false,
  "disarmed": false,
  "magicimmune": false,
  "hexed": false,
  "muted": false,
  "break": false,
  "smoked": false,
  "has_debuff": false,
  "selected_unit": false,
  "talent_1": false,
  "talent_2": true,
  "talent_3": false,
  "talent_4": false,
  "talent_5": false,
  "talent_6": false,
  "talent_7": false,
  "talent_8": false
}
*/
