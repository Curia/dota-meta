import React from 'react';
import { Meta } from '@storybook/react';
import { Stack } from '@chakra-ui/react';

import { HeroCard } from './index';

export default {
  component: HeroCard,
  title: `Components/HeroCard`,
} as Meta;

export const Default: React.VFC<Record<string, never>> = () => (
  <Stack spacing={4} direction="row" align="center">
    <HeroCard id={2} gamesWon={44} gamesPlayed={100} totalGames={400} />
  </Stack>
);
