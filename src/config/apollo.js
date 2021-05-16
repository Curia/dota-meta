import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.stratz.com/graphql',
  cache: new InMemoryCache(),
});
