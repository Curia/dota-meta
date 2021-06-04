/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import {
  RankBracket,
  MatchPlayerPositionType,
  BasicRegionType,
  GameModeEnumType,
} from './../../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: HeroesMetaTrends
// ====================================================

export interface HeroesMetaTrends_heroStats_winDay {
  __typename: 'HeroWinDayType';
  timestamp: any;
  heroId: any;
  matchCount: number;
  winCount: number;
}

export interface HeroesMetaTrends_heroStats_winGameVersion {
  __typename: 'HeroWinGameVersionType';
  gameVersionId: any;
  heroId: any;
  matchCount: number;
  winCount: number;
}

export interface HeroesMetaTrends_heroStats {
  __typename: 'HeroStatsQuery';
  /**
   * Returns the last 12 days by day showing the amount of matches and the amount of wins by hero id.
   */
  winDay: (HeroesMetaTrends_heroStats_winDay | null)[] | null;
  /**
   * Returns the data by game version showing the amount of matches and the amount of wins by hero id.
   */
  winGameVersion: (HeroesMetaTrends_heroStats_winGameVersion | null)[] | null;
}

export interface HeroesMetaTrends {
  /**
   * Queries used to gain insights into hero data and statistics.
   */
  heroStats: HeroesMetaTrends_heroStats | null;
}

export interface HeroesMetaTrendsVariables {
  bracketIds?: (RankBracket | null)[] | null;
  positionIds?: (MatchPlayerPositionType | null)[] | null;
  regionIds?: (BasicRegionType | null)[] | null;
  gameModeIds?: (GameModeEnumType | null)[] | null;
}
