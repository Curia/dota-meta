import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/global.css';
import {
  GlobalStateProvider,
  RetrieveGamestate,
} from '@/components/globalState';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <GlobalStateProvider>
        <RetrieveGamestate>
          <Component {...pageProps} />
        </RetrieveGamestate>
      </GlobalStateProvider>
    </ChakraProvider>
  );
}
