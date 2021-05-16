/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: metaTrend
// ====================================================

export interface metaTrend_heroStats_winDay {
  __typename: 'HeroWinDayType';
  heroId: any;
  winCount: number;
  matchCount: number;
  day: any;
}

export interface metaTrend_heroStats {
  __typename: 'HeroStatsQuery';
  /**
   * Returns the last 12 days by day showing the amount of matches and the amount of wins by hero id.
   */
  winDay: (metaTrend_heroStats_winDay | null)[] | null;
}

export interface metaTrend {
  /**
   * Queries used to gain insights into hero data and statistics.
   */
  heroStats: metaTrend_heroStats | null;
}
