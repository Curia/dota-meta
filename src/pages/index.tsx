import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

// Queries
import { HEROES_META_TREND } from '@/apollo/queries';

// Components
import { Container } from '@chakra-ui/react';
import { MetaFilters } from '@/components/metaFilters';
import { CurrentMeta } from '@/components/currentMeta';
import { MostPicked } from '@/components/mostPicked';

// Types
import { IFilterValues } from '@/components/metaFilters/interfaces';

export default function Home() {
  const [filterValues, setFilterValues] = useState<IFilterValues>({
    bracketIds: [],
    positionIds: [],
    regionIds: [],
    gameModeIds: [],
  });
  const { loading, error, data } = useQuery(HEROES_META_TREND, {
    variables: filterValues,
  });

  return (
    <Container maxW="7xl">
      <MetaFilters
        filterValues={filterValues}
        setFilterValues={setFilterValues}
      />
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <>
          <MostPicked winDay={data.heroStats.winDay} />
          <CurrentMeta winDay={data.heroStats.winDay} />
        </>
      )}
    </Container>
  );
}
