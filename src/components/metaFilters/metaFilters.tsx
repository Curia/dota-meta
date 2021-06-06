import React from 'react';
import { Select, Divider } from '@chakra-ui/react';

// Constants
import ranks from '@/constants/ranks.json';
import regions from '@/constants/regions.json';
import positions from '@/constants/positions.json';
import gameModes from '@/constants/gameModes.json';

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
    setFilterValues({ ...filterValues, [type]: value ? [value] : [] });
  };

  return (
    <>
      <Select
        placeholder="All ranks"
        onChange={(e) => {
          updateFilters(e, `bracketIds`);
        }}
        mb="3"
      >
        {Object.entries(ranks).map(([key, value]) => (
          <option key={key} value={value.name}>
            {value.localized_name}
          </option>
        ))}
      </Select>
      <Select
        placeholder="All positions"
        onChange={(e) => {
          updateFilters(e, `positionIds`);
        }}
        mb="3"
      >
        {Object.entries(positions).map(([key, value]) => (
          <option key={key} value={value.name}>
            {value.localized_name}
          </option>
        ))}
      </Select>
      <Select
        placeholder="All regions"
        onChange={(e) => {
          updateFilters(e, `regionIds`);
        }}
        mb="3"
      >
        {Object.entries(regions).map(([key, value]) => (
          <option key={key} value={value.name}>
            {value.localized_name}
          </option>
        ))}
      </Select>
      <Select
        placeholder="All game modes"
        onChange={(e) => {
          updateFilters(e, `gameModeIds`);
        }}
        mb="3"
      >
        {gameModeIds.map((modeId) => (
          <option key={modeId} value={gameModes[modeId].name}>
            {gameModes[modeId].localized_name}
          </option>
        ))}
      </Select>
      <Divider mb="3" />
    </>
  );
};

export { MetaFilters };
