import React from 'react';

// Components
import { Pill } from '@/components/pill';
import { SimpleGrid, Heading, Image, Text } from '@chakra-ui/react';

// Types
import { HeroesMetaTrends_heroStats_winDay } from '@/apollo/__generated__/HeroesMetaTrends';
import { IHeroJson } from '@/constants/interfaces';

// Utils
import { formatTotalGames, winRate } from '@/utils';

// Constants
import heroJson from '@/constants/heroes.json';
import { STEAM_CDN } from '@/constants';

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
              <Pill key={heroId} href={`hero/${heroId}`}>
                <Image src={`${STEAM_CDN}${HEROS[heroId].icon}`} mr="2" />
                <Text>{winRate(winCount, matchCount)}%</Text>
              </Pill>
            );
          })}
      </SimpleGrid>
    </>
  );
};

export { MostPicked };
