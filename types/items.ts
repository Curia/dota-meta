/* eslint-disable camelcase */
export interface ItemList {
  team2: {
    [playerSlot: string]: {
      [itemSlot: string]: Item;
    };
  };
  team3: {
    [playerSlot: string]: {
      [itemSlot: string]: Item;
    };
  };
}

export interface Item {
  name: string;
  purchaser: number;
  can_cast: boolean;
  cooldown: number;
  passive: boolean;
  charges: boolean;
}

/*
item0: { 
  name: 'item_spirit_vessel',
  purchaser: 0,
  can_cast: false,
  cooldown: 0,
  passive: false,
  charges: 0 
}
*/
