import { Skeleton, Box } from '@chakra-ui/react';

const DefaultSkeleton = () => (
  <>
    <Box height="20px" mt="4" />
    <Box height="20px" mt="4" />
  </>
);

const GlobalSkeleton = ({
  children,
  isLoaded = false,
}: {
  children?: React.ReactChild;
  isLoaded?: boolean;
  msg?: string;
}) => (
  <Skeleton isLoaded={isLoaded}>{children || <DefaultSkeleton />}</Skeleton>
);

export { GlobalSkeleton };
