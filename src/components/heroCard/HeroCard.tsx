import {
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

// Constants
import { HEROES, STEAMCDN } from '@/constants';

// Utils
import { getWinRate, getPickRate } from '@/utils';

interface IHeroCardProps {
  id: number;
  gamesWon: number;
  gamesPlayed: number;
  totalGames: number;
}

const HeroCard: React.FC<IHeroCardProps> = ({
  id,
  gamesWon,
  gamesPlayed,
  totalGames,
}) => {
  const winRate = getWinRate(gamesWon, gamesPlayed);
  const pickRate = getPickRate(gamesPlayed, totalGames);

  return (
    <Flex
      bg={useColorModeValue(`#F9FAFB`, `gray.600`)}
      p={50}
      w="full"
      borderRadius="5"
      alignItems="center"
      justifyContent="center"
    >
      <Image src={`${STEAMCDN}${HEROES[id].img}`} />
      <Heading as="h2">{HEROES[id].localized_name}</Heading>
      <Text>{winRate}</Text>
      <Text>{pickRate}</Text>
    </Flex>
  );
};

export { HeroCard };
