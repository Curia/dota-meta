import React from 'react';

import { HeroesMetaTrends } from '@/apollo/__generated__/HeroesMetaTrends';

const MetaTable: React.FC<{ data: HeroesMetaTrends }> = ({ data }) => {
  console.log(data);
  return (
    <>
      <p>Meta Table</p>
    </>
  );
};

export { MetaTable };
