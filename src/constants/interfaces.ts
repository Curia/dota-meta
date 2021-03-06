//   https://app.quicktype.io/

export interface IHeroJson {
  [id: number]: {
    id: number;
    name: string;
    localized_name: string;
    primary_attr: string;
    attack_type: string;
    roles: string[];
    img: string;
    icon: string;
    base_health: number;
    base_health_regen: number | null;
    base_mana: number;
    base_mana_regen: number;
    base_armor: number;
    base_mr: number;
    base_attack_min: number;
    base_attack_max: number;
    base_str: number;
    base_agi: number;
    base_int: number;
    str_gain: number;
    agi_gain: number;
    int_gain: number;
    attack_range: number;
    projectile_speed: number;
    attack_rate: number;
    move_speed: number;
    turn_rate: number | null;
    cm_enabled: boolean;
    legs: number;
  };
}

export interface IGameModeJson {
  [key: number]: {
    id: number;
    name: string;
    balanced?: boolean;
    localized_name: string;
  };
}
