import React from 'react';

// Components
import { Heading } from '@chakra-ui/react';

// Types
import { HeroesMetaTrends } from '@/apollo/__generated__/HeroesMetaTrends';

const CurrentMeta: React.FC<{ data: HeroesMetaTrends }> = ({ data }) => {
  console.log(data);
  return (
    <>
      <Heading mb={3}>Current Meta</Heading>
    </>
  );
};

export { CurrentMeta };
