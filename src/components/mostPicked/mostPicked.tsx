import React from 'react';

// Components
import { HeroStatPill } from '@/components/heroStatPill';
import { SimpleGrid, Heading } from '@chakra-ui/react';

// Types
import { HeroesMetaTrends_heroStats_winDay } from '@/apollo/__generated__/HeroesMetaTrends';

// Utils
import { formatTotalGames } from '@/utils';

const MostPicked: React.FC<{ winDay: HeroesMetaTrends_heroStats_winDay[] }> = ({
  winDay,
}) => {
  const sortedGamesPlayed = formatTotalGames(winDay).sort(
    (a, b) => b.matchCount - a.matchCount,
  );
  return (
    <>
      <Heading mb={3}>Most Picked</Heading>
      <SimpleGrid minChildWidth="110px" spacing={3}>
        {Array(10)
          .fill(1, 0)
          .map((v, i) => {
            const {
              heroId,
              matchCount,
              winCount,
            }: {
              heroId: number;
              matchCount: number;
              winCount: number;
            } = sortedGamesPlayed[i];
            return (
              <HeroStatPill
                heroId={heroId}
                matchCount={matchCount}
                winCount={winCount}
                key={heroId}
              />
            );
          })}
      </SimpleGrid>
    </>
  );
};

export { MostPicked };
