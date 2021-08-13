import NextLink from 'next/link';
import { Box, Link, Image, Center } from '@chakra-ui/react';

// Interfaces
import { ICard } from '@/components/card/interfaces';

const Card: React.FC<ICard> = ({ image, href, children }) => {
  console.log(`foo`);
  return (
    <Center py={6}>
      <Box
        maxW="445px"
        w="full"
        boxShadow="2xl"
        rounded="md"
        p={3}
        overflow="hidden"
      >
        {image && (
          <Box bg="gray.100" mt={-3} mx={-3} mb={3} pos="relative">
            <Image src={image} layout="fill" />
          </Box>
        )}
        {children}
      </Box>
    </Center>
  );
};

export { Card };
