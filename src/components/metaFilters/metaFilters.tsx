import React from 'react';
import { Box, Select, Divider } from '@chakra-ui/react';

// Constants
import ranks from '@/constants/ranks.json';
import regions from '@/constants/regions.json';
import positions from '@/constants/positions.json';
import gameModes from '@/constants/gameModes.json';

// Types
import { IFilterValues } from '@/components/metaFilters/interfaces';
import { IGameModeJson } from '@/constants/interfaces';

const MetaFilters: React.FC<{
  filterValues: IFilterValues;
  setFilterValues: React.Dispatch<React.SetStateAction<IFilterValues>>;
}> = ({ filterValues, setFilterValues }) => {
  const updateFilters = (
    event: React.ChangeEvent<HTMLSelectElement>,
    type: string,
  ) => {
    const { value } = event.target;
    setFilterValues({ ...filterValues, [type]: value ? [value] : [] });
  };

  const gameModeIds: number[] = [1, 2, 22, 23];
  const gameModeJson: IGameModeJson = gameModes;

  return (
    <Box my="3">
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
        {gameModeIds.map((modeId, key) => (
          <option key={modeId} value={gameModeJson[modeId].name}>
            {gameModeJson[modeId].localized_name}
          </option>
        ))}
      </Select>
      <Divider mb="3" />
    </Box>
  );
};

export { MetaFilters };
