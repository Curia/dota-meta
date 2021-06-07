export interface IFilterValues {
  bracketIds: string[];
  positionIds: string[];
  regionIds: string[];
  gameModeIds: string[];
}

export interface IGameModeJson {
  [key: string]: {
    id: number;
    name: string;
    balanced?: boolean | undefined;
    localized_name: string;
  };
}
