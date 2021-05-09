/* eslint-disable camelcase */
export interface Map {
  name: string;
  matchid: string;
  game_time: number;
  clock_time: number;
  daytime: boolean;
  nightstalker_night: boolean;
  game_state: string;
  paused: boolean;
  win_team: string;
  customgamename: string;
  radiant_ward_purchase_cooldown: number;
  dire_ward_purchase_cooldown: number;
  roshan_state: string;
  roshan_state_end_seconds: number;
}

/*
{ 
  name: 'start',
  matchid: '5548425519',
  game_time: 3271,
  clock_time: 3049,
  daytime: true,
  nightstalker_night: false,
  game_state: 'DOTA_GAMERULES_STATE_GAME_IN_PROGRESS',
  paused: false,
  win_team: 'none',
  customgamename: '',
  radiant_ward_purchase_cooldown: 0,
  dire_ward_purchase_cooldown: 101,
  roshan_state: 'respawn_base',
  roshan_state_end_seconds: 264 
}
*/
