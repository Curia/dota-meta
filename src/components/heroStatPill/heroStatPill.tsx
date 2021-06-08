import { Box, Image, Stat, StatNumber, Divider } from '@chakra-ui/react';

// Interfaces
import { IHeroStatPill } from '@/components/heroStatPill/interfaces';

// Json
import heroJson from '@/constants/heroes.json';

// Utils
import { winRate } from '@/utils';

const HeroStatPill: React.FC<IHeroStatPill> = ({
  heroId,
  matchCount,
  winCount,
  children,
}) => {
  const { icon, localized_name } = heroJson[heroId];
  return (
    <Box
      bg="gray.100"
      maxW="sm"
      borderWidth="1px"
      rounded="full"
      shadow="sm"
      py="1"
      px="3"
      display="flex"
      alignItems="center"
    >
      <Image
        src={`https://steamcdn-a.akamaihd.net/${icon}`}
        alt={`Picture of ${localized_name}`}
      />
      <Divider
        height="100%"
        orientation="vertical"
        mx="1"
        colorScheme="blackAlpha"
      />
      <Stat>
        <StatNumber fontSize="sm">{`${winRate(
          winCount,
          matchCount,
        )}%`}</StatNumber>
      </Stat>
      {children}
    </Box>
  );
};

export { HeroStatPill };
