import React from 'react';

// Components
import { SimpleGrid, Heading, Text, Divider } from '@chakra-ui/react';
import { Card } from '@/components/card';

// Types
import { HeroesMetaTrends_heroStats_winDay } from '@/apollo/__generated__/HeroesMetaTrends';
import { IHeroJson } from '@/constants/interfaces';

// Utils
import { formatTotalGames, getWinRate } from '@/utils';

// Constants
import heroJson from '@/constants/heroes.json';
import { STEAMCDN } from '@/constants';

const HEROS: IHeroJson = heroJson;

const MostPicked: React.FC<{ winDay: HeroesMetaTrends_heroStats_winDay[] }> = ({
  winDay,
}) => {
  const sortedGamesPlayed = formatTotalGames(winDay).sort(
    (a, b) => b.matchCount - a.matchCount,
  );
  return (
    <>
      <Heading mb={3}>Most Picked</Heading>
      <SimpleGrid columns={6} spacing={3}>
        {Array(10)
          .fill(1, 0)
          .map((v, i) => {
            const { heroId, matchCount, winCount } = sortedGamesPlayed[i];
            return (
              <Card
                image={`${STEAMCDN}${HEROS[heroId].img}`}
                href={`/hero/${HEROS[heroId]}`}
              >
                <Text>Winrate: {getWinRate(winCount, matchCount)}%</Text>
                <Text>Games: {matchCount}</Text>
              </Card>
            );
          })}
      </SimpleGrid>
      <Divider my="3" />
    </>
  );
};

export { MostPicked };
