// Types
import { HeroesMetaTrends_heroStats_winDay } from '@/apollo/__generated__/HeroesMetaTrends';
import { IFormatTotalGames } from '@/components/mostPicked/interfaces';

export const formatTotalGames = (
  winDay: HeroesMetaTrends_heroStats_winDay[],
) => {
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
