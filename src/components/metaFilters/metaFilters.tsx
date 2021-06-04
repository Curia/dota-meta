import React, { useContext, useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import { AppContext } from '@/components/appProvider';
import { useQuery } from '@apollo/client';

// Constants
import ranks from '@/constants/ranks.json';
import regions from '@/constants/regions.json';

const MetaFilters: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [filterValues, setFilterValues] = useState({
    rank: ``,
    lane: ``,
    region: ``,
    gameMode: ``,
  });

  const updateFilters = (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: string,
  ) => {
    const { value } = event.target;
    setFilterValues({ ...filterValues, [type]: value });
  };

  useEffect(() => {
    console.log(filterValues);
  }, [filterValues]);

  return (
    <>
      <Select
        placeholder="Select rank"
        onChange={(e) => {
          updateFilters(e, `rank`);
        }}
      >
        {Object.entries(ranks).map(([key, value]) => (
          <option key={key} value={value.name}>
            {value.localized_name}
          </option>
        ))}
      </Select>
      <Select
        placeholder="Select region"
        onChange={(e) => {
          updateFilters(e, `region`);
        }}
      >
        {Object.entries(regions).map(([key, value]) => (
          <option key={key} value={value.name}>
            {value.localized_name}
          </option>
        ))}
      </Select>
    </>
  );
};

export { MetaFilters };
