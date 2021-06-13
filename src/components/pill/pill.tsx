import NextLink from 'next/link';
import { Box, Link } from '@chakra-ui/react';

// Interfaces
import { IPill } from '@/components/pill/interfaces';

const Pill: React.FC<IPill> = ({ href, children }) => {
  if (href) {
    return (
      <NextLink href={href}>
        <Link
          bg="gray.100"
          maxW="sm"
          borderWidth="1px"
          rounded="full"
          shadow="sm"
          py="1"
          px="3"
          display="flex"
          alignItems="center"
          inline="true"
        >
          {children}
        </Link>
      </NextLink>
    );
  }
  return (
    <Box
      bg="gray.100"
      maxW="sm"
      borderWidth="1px"
      rounded="full"
      shadow="sm"
      py="1"
      px="3"
      display="flex"
      alignItems="center"
    >
      {children}
    </Box>
  );
};

export { Pill };
