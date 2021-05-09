/* eslint-disable camelcase */
export interface PlayerList {
  team2: {
    [playerSlot: string]: Player;
  };
  team3: {
    [playerSlot: string]: Player;
  };
}

export interface Player {
  steamid: string;
  name: string;
  activity: string;
  kills: number;
  deaths: number;
  assists: number;
  last_hits: number;
  denies: number;
  kill_streak: number;
  commands_issued: number;
  kill_list: string[];
  team_name: string;
  gold: number;
  gold_reliable: number;
  gold_unreliable: number;
  gold_from_hero_kills: number;
  gold_from_creep_kills: number;
  gold_from_income: number;
  gold_from_shared: number;
  gpm: number;
  xpm: number;
  net_worth: number;
  hero_damage: number;
  wards_purchased: number;
  wards_placed: number;
  wards_destroyed: number;
  runes_activated: number;
  camps_stacked: number;
  support_gold_spent: number;
  consumable_gold_spent: number;
  item_gold_spent: number;
  gold_lost_to_death: number;
  gold_spent_on_buybacks: number;
}

/*
player0: {
  steamid: '76561198130022440',
  name: 'LuziFy',
  activity: 'playing',
  kills: 0,
  deaths: 11,
  assists: 11,
  last_hits: 311,
  denies: 15,
  kill_streak: 0,
  commands_issued: 9576,
  kill_list: {},
  team_name: 'radiant',
  gold: 1578,
  gold_reliable: 790,
  gold_unreliable: 788,
  gold_from_hero_kills: 1669,
  gold_from_creep_kills: 13619,
  gold_from_income: 5607,
  gold_from_shared: 1669,
  gpm: 447,
  xpm: 509,
  net_worth: 18698,
  hero_damage: 36017,
  wards_purchased: 3,
  wards_placed: 2,
  wards_destroyed: 3,
  runes_activated: 7,
  camps_stacked: 0,
  support_gold_spent: 365,
  consumable_gold_spent: 2335,
  item_gold_spent: 18425,
  gold_lost_to_death: 2209,
  gold_spent_on_buybacks: 4499
}
*/
