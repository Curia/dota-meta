import { gql } from '@apollo/client';

export const HEROES_META_TREND = gql`
  query HeroesMetaTrends(
    $bracketIds: [RankBracket]
    $positionIds: [MatchPlayerPositionType]
    $regionIds: [BasicRegionType]
    $gameModeIds: [GameModeEnumType]
  ) {
    heroStats {
      winDay(
        take: 8
        bracketIds: $bracketIds
        positionIds: $positionIds
        regionIds: $regionIds
        gameModeIds: $gameModeIds
      ) {
        timestamp: day
        heroId
        matchCount
        winCount
        __typename
      }
      winGameVersion(
        take: 3
        bracketIds: $bracketIds
        positionIds: $positionIds
        regionIds: $regionIds
      ) {
        gameVersionId
        heroId
        matchCount
        winCount
        __typename
      }
      __typename
    }
  }
`;
