import React from 'react';
import { Select } from '@chakra-ui/react';

// Constants
import ranks from '@/constants/ranks.json';
import regions from '@/constants/regions.json';

// Types
import { IFilterValues } from '@/types/meta';

const MetaFilters: React.FC<{
  filterValues: IFilterValues;
  setFilterValues: any;
}> = ({ filterValues, setFilterValues }) => {
  const updateFilters = (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: string,
  ) => {
    const { value } = event.target;
    setFilterValues({ ...filterValues, [type]: [value] });
  };

  return (
    <>
      <Select
        placeholder="Select rank"
        onChange={(e) => {
          updateFilters(e, `bracketIds`);
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
          updateFilters(e, `regionIds`);
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
