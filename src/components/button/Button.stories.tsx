import React from 'react';
import { Meta } from '@storybook/react';
import { Stack, Button } from '@chakra-ui/react';

export default {
  component: Button,
  title: `Components/Button`,
} as Meta;

export const Sizes: React.VFC<Record<string, never>> = () => (
  <Stack spacing={4} direction="row" align="center">
    <Button colorScheme="teal" size="xs">
      Button
    </Button>
    <Button colorScheme="teal" size="sm">
      Button
    </Button>
    <Button colorScheme="teal" size="md">
      Button
    </Button>
    <Button colorScheme="teal" size="lg">
      Button
    </Button>
  </Stack>
);
export const Variants: React.VFC<Record<string, never>> = () => (
  <Stack direction="row" spacing={4} align="center">
    <Button colorScheme="teal" variant="solid">
      Button
    </Button>
    <Button colorScheme="teal" variant="outline">
      Button
    </Button>
    <Button colorScheme="teal" variant="ghost">
      Button
    </Button>
    <Button colorScheme="teal" variant="link">
      Button
    </Button>
  </Stack>
);
