import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Container } from '@chakra-ui/react';
// Queries
import { HEROES_META_TREND } from '@/apollo/queries';

// Components
import { MetaFilters } from '@/components/metaFilters';
import { MetaTable } from '@/components/metaTable';

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
      {loading ? <p>Loading ...</p> : <MetaTable data={data} />}
    </Container>
  );
}
