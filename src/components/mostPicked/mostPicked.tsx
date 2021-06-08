import React from 'react';

// Types
import { HeroesMetaTrends_heroStats_winDay } from '@/apollo/__generated__/HeroesMetaTrends';

// Constants
import heroesJson from '@/constants/heroes.json';

interface IFormatTotalGames {
  heroId: any;
  matchCount: number;
  winCount: number;
}

const formatTotalGames = (winDay: HeroesMetaTrends_heroStats_winDay[]) => {
  const formattedData: IFormatTotalGames[] = [];
  winDay.forEach((heroDay) => {
    const { heroId, winCount, matchCount } = heroDay;
    const existing = formattedData.some((hero) => hero.heroId === heroId);
    if (!existing) {
      formattedData.push({ heroId, winCount, matchCount });
    } else {
      const heroIndex = formattedData.findIndex(
        (hero) => hero.heroId === heroId,
      );
      formattedData[heroIndex].matchCount += matchCount;
      formattedData[heroIndex].winCount += winCount;
    }
  });
  return formattedData;
};

const MostPicked: React.FC<{ winDay: HeroesMetaTrends_heroStats_winDay[] }> = ({
  winDay,
}) => {
  const sortedGamesPlayed = formatTotalGames(winDay).sort(
    (a, b) => b.matchCount - a.matchCount,
  );
  return (
    <>
      {Array(20)
        .fill(1, 0)
        .map((v, i) => {
          const { heroId } = sortedGamesPlayed[i];
          return <p>{heroesJson[heroId].localized_name}</p>;
        })}
    </>
  );
};

export { MostPicked };
