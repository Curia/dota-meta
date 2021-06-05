import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/components/appProvider';
import { useQuery } from '@apollo/client';

// Queries
import { HEROES_META_TREND } from '@/apollo/queries';

// Components
import { MetaFilters } from '@/components/metaFilters';
import { MetaTable } from '@/components/metaTable';

// Types
import { IFilterValues } from '@/types/meta';

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
    <div>
      <MetaFilters
        filterValues={filterValues}
        setFilterValues={setFilterValues}
      />
      {loading ? <p>Loading ...</p> : <MetaTable data={data} />}
    </div>
  );
}
