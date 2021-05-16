import React, { useContext, useEffect } from 'react';
import { AppContext } from '@/components/appProvider';
import { gql, useQuery } from '@apollo/client';

const GET_GREETING = gql`
  query metaTrend {
    heroStats {
      winDay(bracketIds: HERALD) {
        heroId
        winCount
        matchCount
        day
      }
    }
  }
`;

export default function Home() {
  const { state, dispatch } = useContext(AppContext);

  const { loading, error, data } = useQuery(GET_GREETING);

  useEffect(() => {
    console.log(data);
    if (!state.meta.initialLoad) {
      dispatch({
        type: `UPDATE_META`,
        payload: data,
      });
    }
  }, [data, loading]);

  if (loading) return <p>Loading ...</p>;

  return <h1>Data loaded</h1>;
}
