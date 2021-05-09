import { Map } from "./map";
import { ItemList } from "./items";
import { Provider } from "./provider";
import { PlayerList, Player } from "./players";
import { HeroList } from "./heroes";
import { AbilitiesList } from "./abilities";
import { BuildingList } from "./buildings";

export interface GameState {
  provider: Provider;
  map: Map;
  player: PlayerList | Player;
  hero: HeroList;
  abilities: AbilitiesList;
  buildings: BuildingList;
  draft: Record<string, unknown>;
  items: ItemList;
  previously: Record<string, unknown>;
}
