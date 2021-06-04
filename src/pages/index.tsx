import React, { useContext, useEffect } from 'react';
import { AppContext } from '@/components/appProvider';
import { useQuery } from '@apollo/client';

// Queries
import { HEROES_META_TREND } from '@/apollo/queries';

// Components
import { MetaFilters } from '@/components/metaFilters';

export default function Home() {
  const { state, dispatch } = useContext(AppContext);

  const { loading, error, data } = useQuery(HEROES_META_TREND);

  useEffect(() => {
    if (!state.meta.initialLoad) {
      dispatch({
        type: `UPDATE_META`,
        payload: data,
      });
    }
  }, [data, loading]);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      <MetaFilters />
    </div>
  );
}
